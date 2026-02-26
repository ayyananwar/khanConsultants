# Birth Certificate Booking - Apps Script Setup

This frontend now calls a **single Apps Script Web App URL** using an `action` field:

- `getSlots`
- `getBookingFee`
- `createOrder`
- `verifyPaymentAndSave`

## 1) Google Sheets Structure

Create a Google Sheet with these tabs:

### `Bookings`
Headers (row 1):

`Timestamp | Filler_Name | Filler_Phone | Filler_Email | Application_Type | Applicant_Name | Applicant_DOB | Applicant_Phone | Applicant_Email | Relationship_To_Applicant | Correction_Fields_JSON | Documents_Selected_JSON | Chosen_Thursday | Payment_ID | Payment_Status | Booking_Reference`

### `Settings`
Headers/value:

- `Booking_Fee` in `A2`, numeric value in `B2` (example: `199`)
- `Appointment_Window` in `A3`, value in `B3` (example: `9:20 AM - 9:50 AM`)
- `Razorpay_Key_Id` in `A4`, value in `B4`
- `Razorpay_Key_Secret` in `A5`, value in `B5`

### `Slots`
Headers:

`Date | Max_Slots | Booked_Count | Time_Window`

Use ISO date in `Date` column (example: `2026-02-26`).
`Time_Window` is optional per date (example: `9:20 AM - 9:50 AM`). If blank, fallback to `Settings!Appointment_Window`.

## 2) Apps Script Code (`Code.gs`)

⚠️ **Production fixes included below:** script lock for atomic writes, server-authoritative pricing, and server-side payment/slot validation.

```javascript
const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID';
const SLOT_LOCK_TIMEOUT_MS = 30000;
const ALLOWED_ACTIONS = ['getSlots', 'getBookingFee', 'createOrder', 'verifyPaymentAndSave'];

function parseRequestBody(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('Missing request body');
  }
  let parsed;
  try {
    parsed = JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error('Invalid JSON payload');
  }
  if (!parsed || typeof parsed !== 'object') {
    throw new Error('Invalid payload type');
  }
  return parsed;
}

function sanitizeText(value, maxLen) {
  return String(value || '').trim().slice(0, maxLen);
}

function parsePipeList(value) {
  return String(value || '')
    .split('|')
    .map(function (item) { return item.trim(); })
    .filter(function (item) { return item.length > 0; });
}

function doPost(e) {
  try {
    const body = parseRequestBody(e);
    const action = sanitizeText(body.action, 64);

    if (!action) return jsonResponse(false, null, 'Missing action');
    if (ALLOWED_ACTIONS.indexOf(action) === -1) return jsonResponse(false, null, 'Invalid action');

    if (action === 'getSlots') return jsonResponse(true, handleGetSlots());
    if (action === 'getBookingFee') return jsonResponse(true, handleGetBookingFee());
    if (action === 'createOrder') return jsonResponse(true, handleCreateOrder(body));
    if (action === 'verifyPaymentAndSave') return jsonResponse(true, handleVerifyPaymentAndSave(body));

    return jsonResponse(false, null, 'Invalid action');
  } catch (error) {
    return jsonResponse(false, null, String(error));
  }
}

function jsonResponse(success, data, error) {
  return ContentService
    .createTextOutput(JSON.stringify({ success, data, error: error || '' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheet(name) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(name);
  if (!sheet) {
    throw new Error('Missing required sheet: ' + name);
  }
  return sheet;
}

function getBookingsColumnMap() {
  const sheet = getSheet('Bookings');
  if (sheet.getLastRow() < 1) {
    throw new Error('Bookings sheet is missing header row');
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const map = {};
  headers.forEach(function (header, index) {
    const key = String(header || '').trim();
    if (key) {
      map[key] = index + 1;
    }
  });

  ['Payment_ID', 'Payment_Status', 'Booking_Reference'].forEach(function (requiredHeader) {
    if (!map[requiredHeader]) {
      throw new Error('Missing required Bookings header: ' + requiredHeader);
    }
  });

  return map;
}

function getSettingsMap() {
  const sheet = getSheet('Settings');
  const values = sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 2).getValues();
  const map = {};
  values.forEach((row) => {
    if (row[0]) map[String(row[0]).trim()] = row[1];
  });
  return map;
}

function handleGetBookingFee() {
  const settings = getSettingsMap();
  return {
    amount: Number(settings.Booking_Fee || 199),
    currency: 'INR',
    appointmentWindow: String(settings.Appointment_Window || '9:20 AM - 9:50 AM'),
  };
}

function nextThreeThursdays() {
  const dates = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const probe = new Date(today);
  while (dates.length < 3) {
    probe.setDate(probe.getDate() + 1);
    if (probe.getDay() === 4) {
      dates.push(Utilities.formatDate(probe, Session.getScriptTimeZone(), 'yyyy-MM-dd'));
    }
  }
  return dates;
}

function handleGetSlots() {
  const slotsSheet = getSheet('Slots');
  const settings = getSettingsMap();
  const defaultWindow = String(settings.Appointment_Window || '9:20 AM - 9:50 AM');
  const map = {};
  const rows = slotsSheet.getLastRow() > 1
    ? slotsSheet.getRange(2, 1, slotsSheet.getLastRow() - 1, 4).getValues()
    : [];

  rows.forEach((row) => {
    if (!row[0]) return;
    map[String(row[0])] = {
      maxSlots: Number(row[1] || 10),
      bookedCount: Number(row[2] || 0),
      timeWindow: String(row[3] || defaultWindow),
    };
  });

  const dates = nextThreeThursdays();
  const slots = dates.map((date) => {
    const existing = map[date] || { maxSlots: 10, bookedCount: 0, timeWindow: defaultWindow };
    const remaining = Math.max(0, existing.maxSlots - existing.bookedCount);
    return {
      date,
      label: date,
      timeWindow: existing.timeWindow || defaultWindow,
      maxSlots: existing.maxSlots,
      bookedCount: existing.bookedCount,
      remainingSlots: remaining,
      isFull: remaining <= 0,
    };
  });

  const allFull = slots.every((slot) => slot.isFull);
  return { slots, allFull, waitlistAllowed: true };
}

function handleCreateOrder(body) {
  const settings = getSettingsMap();
  const keyId = String(settings.Razorpay_Key_Id || '');
  const keySecret = String(settings.Razorpay_Key_Secret || '');
  const bookingFee = Number(settings.Booking_Fee || 199);

  if (!keyId || !keySecret) throw new Error('Razorpay settings missing');
  if (bookingFee <= 0) throw new Error('Invalid booking fee in Settings');

  const payload = {
    amount: bookingFee * 100,
    currency: 'INR',
    receipt: 'bc_' + new Date().getTime(),
    payment_capture: 1,
  };

  const response = UrlFetchApp.fetch('https://api.razorpay.com/v1/orders', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Basic ' + Utilities.base64Encode(keyId + ':' + keySecret),
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  });

  const data = JSON.parse(response.getContentText());
  if (!data.id) throw new Error('Failed to create Razorpay order');

  return {
    orderId: data.id,
    amountSubunits: Number(data.amount || bookingFee * 100),
    amountRupees: bookingFee,
    currency: 'INR',
    keyId,
  };
}

function fetchRazorpayPayment(paymentId, keyId, keySecret) {
  const response = UrlFetchApp.fetch('https://api.razorpay.com/v1/payments/' + encodeURIComponent(paymentId), {
    method: 'get',
    headers: {
      Authorization: 'Basic ' + Utilities.base64Encode(keyId + ':' + keySecret),
    },
    muteHttpExceptions: true,
  });

  const data = JSON.parse(response.getContentText() || '{}');
  if (!data.id) throw new Error('Unable to verify payment details from Razorpay');
  return data;
}

function verifySignature(orderId, paymentId, signature, keySecret) {
  const raw = orderId + '|' + paymentId;
  const computed = Utilities.computeHmacSha256Signature(raw, keySecret);
  const computedHex = computed.map(function (b) {
    const v = (b < 0 ? b + 256 : b).toString(16);
    return v.length === 1 ? '0' + v : v;
  }).join('');

  return computedHex === signature;
}

function incrementSlotIfAvailable(chosenThursday) {
  const upcomingDates = nextThreeThursdays();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(chosenThursday) && chosenThursday !== 'WAITLIST') {
    return false;
  }

  if (chosenThursday === 'WAITLIST') {
    return areAllUpcomingSlotsFull(upcomingDates);
  }

  if (upcomingDates.indexOf(chosenThursday) === -1) {
    return false;
  }

  const sheet = getSheet('Slots');
  const rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues()
    : [];

  for (let i = 0; i < rows.length; i++) {
    const date = String(rows[i][0] || '');
    if (date !== chosenThursday) continue;

    const maxSlots = Number(rows[i][1] || 10);
    const bookedCount = Number(rows[i][2] || 0);
    if (bookedCount >= maxSlots) return false;

    sheet.getRange(i + 2, 3).setValue(bookedCount + 1);
    return true;
  }

  sheet.appendRow([chosenThursday, 10, 1, '']);
  return true;
}

function areAllUpcomingSlotsFull(upcomingDates) {
  const sheet = getSheet('Slots');
  const rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues()
    : [];

  const map = {};
  rows.forEach((row) => {
    if (!row[0]) return;
    map[String(row[0])] = {
      maxSlots: Number(row[1] || 10),
      bookedCount: Number(row[2] || 0),
    };
  });

  return upcomingDates.every((date) => {
    const existing = map[date] || { maxSlots: 10, bookedCount: 0 };
    return Number(existing.bookedCount) >= Number(existing.maxSlots);
  });
}

function bookingAlreadyExists(paymentId) {
  const sheet = getSheet('Bookings');
  if (sheet.getLastRow() <= 1) return false;
  const columns = getBookingsColumnMap();
  const values = sheet.getRange(2, columns.Payment_ID, sheet.getLastRow() - 1, 1).getValues();
  return values.some((row) => String(row[0] || '') === paymentId);
}

function validateBookingFormData(formData) {
  const applicantName = sanitizeText(formData.applicantName, 120);
  const applicantDob = sanitizeText(formData.applicantDob, 20);
  const applicantPhone = String(formData.applicantPhone || '').replace(/\D/g, '');
  const applicantEmail = sanitizeText(formData.applicantEmail, 160);
  const relation = sanitizeText(formData.relation || 'self', 16);
  const fillerPhoneRaw = String(formData.fillerPhone || '').replace(/\D/g, '');
  const fillerEmailRaw = sanitizeText(formData.fillerEmail, 160);
  const fillerPhone = relation === 'self' ? (fillerPhoneRaw || applicantPhone) : fillerPhoneRaw;
  const fillerEmail = relation === 'self' ? (fillerEmailRaw || applicantEmail) : fillerEmailRaw;
  const chosenThursday = sanitizeText(formData.chosenThursday, 32);

  if (!applicantName) throw new Error('Applicant name is required');
  if (!applicantDob) throw new Error('Applicant DOB is required');
  if (applicantPhone.length !== 10) throw new Error('Applicant phone must be exactly 10 digits');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicantEmail)) throw new Error('Applicant email is invalid');
  if (fillerPhone.length !== 10) throw new Error('Filler phone must be exactly 10 digits');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fillerEmail)) throw new Error('Filler email is invalid');
  if (!chosenThursday) throw new Error('Slot is required');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(applicantDob)) throw new Error('Applicant DOB format is invalid');

  const documents = Array.isArray(formData.documents) ? formData.documents : [];
  if (documents.length === 0) throw new Error('At least one document is required');

  const correctionEntries = Array.isArray(formData.correctionEntries) ? formData.correctionEntries : [];
  const applicationType = sanitizeText(formData.applicationType, 32).toLowerCase();
  if (applicationType === 'correction') {
    if (correctionEntries.length === 0) throw new Error('Correction fields are required for correction type');
    correctionEntries.forEach(function (entry) {
      const incorrectValue = sanitizeText(entry && entry.incorrectValue, 240);
      const correctValue = sanitizeText(entry && entry.correctValue, 240);
      if (!incorrectValue || !correctValue) {
        throw new Error('Correction fields must include incorrect and correct values');
      }
    });
  }

  const relationshipToApplicant = sanitizeText(formData.relationshipToApplicant, 64);
  const relationshipOther = sanitizeText(formData.relationshipOther, 120);
  if (relation === 'other' && !relationshipToApplicant) throw new Error('Relationship with applicant is required for relation=other');
  if (relation === 'other' && relationshipToApplicant === 'Other' && !relationshipOther) {
    throw new Error('Relationship details are required when relationship is Other');
  }
  if (relation === 'other') {
    const fillerName = sanitizeText(formData.fillerName, 120);
    const fillerPhone = String(formData.fillerPhone || '').replace(/\D/g, '');
    if (!fillerName) throw new Error('Filler name is required for relation=other');
    if (fillerPhone.length !== 10) throw new Error('Filler phone must be exactly 10 digits for relation=other');
  }
}

function getExistingBookingReferenceByPaymentId(paymentId) {
  const sheet = getSheet('Bookings');
  if (sheet.getLastRow() <= 1) return '';
  const columns = getBookingsColumnMap();
  const startCol = Math.min(columns.Payment_ID, columns.Payment_Status, columns.Booking_Reference);
  const endCol = Math.max(columns.Payment_ID, columns.Payment_Status, columns.Booking_Reference);
  const width = endCol - startCol + 1;
  const values = sheet.getRange(2, startCol, sheet.getLastRow() - 1, width).getValues();

  const paymentOffset = columns.Payment_ID - startCol;
  const statusOffset = columns.Payment_Status - startCol;
  const referenceOffset = columns.Booking_Reference - startCol;

  for (let i = values.length - 1; i >= 0; i--) {
    const rowPaymentId = String(values[i][paymentOffset] || '');
    if (rowPaymentId === paymentId) {
      const rowStatus = String(values[i][statusOffset] || '').toLowerCase();
      const reference = String(values[i][referenceOffset] || '');
      if (reference && (!rowStatus || rowStatus === 'success')) {
        return reference;
      }
    }
  }

  for (let i = values.length - 1; i >= 0; i--) {
    const rowPaymentId = String(values[i][paymentOffset] || '');
    if (rowPaymentId === paymentId) {
      return String(values[i][referenceOffset] || '');
    }
  }

  return '';
}

function getAppointmentWindowForDate(chosenThursday, fallbackWindow) {
  if (!chosenThursday || chosenThursday === 'WAITLIST') {
    return fallbackWindow;
  }

  const sheet = getSheet('Slots');
  const rows = sheet.getLastRow() > 1
    ? sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues()
    : [];

  for (let i = 0; i < rows.length; i++) {
    const rowDate = String(rows[i][0] || '');
    if (rowDate !== chosenThursday) continue;
    return String(rows[i][3] || fallbackWindow);
  }

  return fallbackWindow;
}

function handleVerifyPaymentAndSave(body) {
  const settings = getSettingsMap();
  const keyId = String(settings.Razorpay_Key_Id || '');
  const keySecret = String(settings.Razorpay_Key_Secret || '');
  const bookingFee = Number(settings.Booking_Fee || 199);
  const appointmentWindow = String(settings.Appointment_Window || '9:20 AM - 9:50 AM');

  const paymentId = String(body.razorpayPaymentId || '');
  const orderId = String(body.razorpayOrderId || '');
  const signature = String(body.razorpaySignature || '');
  const formData = body.formData || {};

  validateBookingFormData(formData);

  if (!paymentId || !orderId || !signature) throw new Error('Missing payment details');
  if (!keyId || !keySecret) throw new Error('Razorpay settings missing');
  if (!verifySignature(orderId, paymentId, signature, keySecret)) throw new Error('Invalid payment signature');

  const paymentDetails = fetchRazorpayPayment(paymentId, keyId, keySecret);
  if (String(paymentDetails.order_id || '') !== orderId) throw new Error('Payment order mismatch');
  if (String(paymentDetails.status || '') !== 'captured') throw new Error('Payment not captured');
  if (Number(paymentDetails.amount || 0) !== bookingFee * 100) throw new Error('Payment amount mismatch');

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(SLOT_LOCK_TIMEOUT_MS)) {
    throw new Error('System is busy. Please retry in a few seconds.');
  }

  try {
    if (bookingAlreadyExists(paymentId)) {
      const existingReference = getExistingBookingReferenceByPaymentId(paymentId);
      const existingChosenThursday = String(formData.chosenThursday || '');
      const existingAppointmentWindow = getAppointmentWindowForDate(existingChosenThursday, appointmentWindow);
      return {
        bookingReference: existingReference || ('EXISTING-' + paymentId),
        chosenThursday: existingChosenThursday,
        appointmentWindow: existingAppointmentWindow,
        paymentId,
      };
    }

    const chosenThursday = String(formData.chosenThursday || '');
    if (!chosenThursday) throw new Error('Slot is required');

    if (!/^\d{4}-\d{2}-\d{2}$/.test(chosenThursday) && chosenThursday !== 'WAITLIST') {
      throw new Error('Invalid slot format');
    }

    if (chosenThursday === 'WAITLIST' && !areAllUpcomingSlotsFull(nextThreeThursdays())) {
      throw new Error('Waitlist not allowed while slots are available');
    }

    if (!incrementSlotIfAvailable(chosenThursday)) {
      throw new Error('Selected slot is unavailable for booking. Please retry.');
    }

    const selectedAppointmentWindow = getAppointmentWindowForDate(chosenThursday, appointmentWindow);

    const sheet = getSheet('Bookings');
    const bookingReference = 'BC-' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');

    sheet.appendRow([
      new Date(),
      sanitizeText(formData.fillerName || formData.applicantName || '', 120),
      sanitizeText(formData.fillerPhone || formData.applicantPhone || '', 20),
      sanitizeText(formData.fillerEmail || formData.applicantEmail || '', 160),
      sanitizeText(formData.applicationType === 'other' ? formData.applicationTypeOther : formData.applicationType, 64),
      sanitizeText(formData.applicantName || '', 120),
      sanitizeText(formData.applicantDob || '', 20),
      sanitizeText(formData.applicantPhone || '', 20),
      sanitizeText(formData.applicantEmail || '', 160),
      sanitizeText(formData.relationshipToApplicant === 'Other' ? formData.relationshipOther : formData.relationshipToApplicant, 120),
      JSON.stringify(formData.correctionEntries || []),
      JSON.stringify({ selected: formData.documents || [], other: [] }),
      chosenThursday,
      paymentId,
      'Success',
      bookingReference,
    ]);

    try {
      MailApp.sendEmail({
        to: sanitizeText(formData.applicantEmail || formData.fillerEmail, 160),
        subject: 'Birth Certificate Appointment Confirmation',
        body:
          'Khan Consultants\n' +
          'Birth Certificate Appointment Confirmation\n\n' +
          'Dear ' + sanitizeText(formData.applicantName, 120) + ',\n\n' +
          'Your booking has been successfully confirmed.\n\n' +
          'Booking Reference: ' + bookingReference + '\n' +
          'Appointment Date: ' + sanitizeText(chosenThursday, 32) + '\n' +
          'Time Window: ' + sanitizeText(selectedAppointmentWindow, 64) + '\n' +
          'Payment ID: ' + sanitizeText(paymentId, 120) + '\n\n' +
          'Please carry all original supporting documents during your appointment.\n\n' +
          'Need help?\n' +
          'WhatsApp: +91 62911 39691\n' +
          'Email: support@khanconsultants.in\n\n' +
          'Regards,\n' +
          'Khan Consultants',
        htmlBody:
          '<div style="font-family:Arial,sans-serif;background:#f5f7fb;padding:24px;">' +
            '<div style="max-width:620px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">' +
              '<div style="background:#1f4d3b;padding:20px 24px;">' +
                '<h2 style="margin:0;font-size:20px;line-height:1.3;color:#ffffff;">Khan Consultants</h2>' +
                '<p style="margin:6px 0 0 0;font-size:13px;color:#d1fae5;">Birth Certificate Appointment Confirmation</p>' +
              '</div>' +
              '<div style="padding:22px 24px;color:#111827;">' +
                '<p style="margin:0 0 12px 0;font-size:14px;">Dear ' + sanitizeText(formData.applicantName, 120) + ',</p>' +
                '<p style="margin:0 0 16px 0;font-size:14px;color:#374151;">Your booking has been successfully confirmed. Please find your appointment details below.</p>' +
                '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
                  '<tr>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;color:#6b7280;">Booking Reference</td>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;text-align:right;font-weight:700;color:#111827;">' + bookingReference + '</td>' +
                  '</tr>' +
                  '<tr>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;color:#6b7280;">Appointment Date</td>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;text-align:right;color:#111827;">' + sanitizeText(chosenThursday, 32) + '</td>' +
                  '</tr>' +
                  '<tr>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;color:#6b7280;">Time Window</td>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;text-align:right;color:#111827;">' + sanitizeText(selectedAppointmentWindow, 64) + '</td>' +
                  '</tr>' +
                  '<tr>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;color:#6b7280;">Payment ID</td>' +
                    '<td style="padding:10px 0;border-top:1px solid #e5e7eb;text-align:right;color:#111827;">' + sanitizeText(paymentId, 120) + '</td>' +
                  '</tr>' +
                '</table>' +
                '<div style="margin-top:16px;padding:12px 14px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;">' +
                  '<p style="margin:0;font-size:13px;color:#374151;">Please carry all original supporting documents during your appointment.</p>' +
                '</div>' +
              '</div>' +
              '<div style="padding:14px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;">' +
                '<p style="margin:0 0 6px 0;font-size:12px;color:#6b7280;">Need help?</p>' +
                '<p style="margin:0;font-size:13px;color:#111827;">WhatsApp: <a href="https://wa.me/916291139691" style="color:#1f4d3b;text-decoration:none;">+91 62911 39691</a> | Email: <a href="mailto:support@khanconsultants.in" style="color:#1f4d3b;text-decoration:none;">support@khanconsultants.in</a></p>' +
              '</div>' +
            '</div>' +
          '</div>',
      });
    } catch (emailError) {
      Logger.log('Email send failed for paymentId=' + paymentId + ' error=' + String(emailError));
    }

    return {
      bookingReference,
      chosenThursday,
      appointmentWindow: selectedAppointmentWindow,
      paymentId,
    };
  } finally {
    lock.releaseLock();
  }
}
```

### Contact Validation Behavior (Important)

- For `relation = self`, backend validation allows `fillerPhone` / `fillerEmail` to be omitted in payload and automatically falls back to applicant phone/email before validation.
- For `relation = other`, `fillerName`, `fillerPhone`, and valid `fillerEmail` are required.
- This keeps backend validation aligned with frontend normalization and avoids false failures when self-flow does not send separate filler contact values.

## 3) Deployment

1. Deploy Apps Script as **Web App**
2. Execute as: **Me**
3. Access: **Anyone**
4. Copy Web App URL
5. Set frontend env var:

`.env`

```bash
VITE_BOOKING_SCRIPT_URL=https://script.google.com/macros/s/AKfycbzHrws169TTlcvjRuFE0hI74QcKw3Zt9Lsh_7-1DjEremEAPEocfs_dH2XhjkAx5dznAw/exec
```

## 4) Frontend Integration Status

Already integrated:

- Fullscreen booking modal in `src/components/BirthCertificateBookingModal.tsx`
- API client in `src/api/birthBookingApi.ts`
- CTA wiring in `src/pages/services/Certificates.tsx`

If your Apps Script response shape differs, update only `src/api/birthBookingApi.ts` mapping.

## 5) Multiple Family Members (Dad/Mom) Booking Behavior

Configured behavior now:

- One booking flow = one applicant = one payment.
- After success, user can immediately start **Book for another person** from the same modal.
- Each applicant can choose a separate slot.
- Fee is charged separately per applicant.
- Backend duplicate protection is by `Payment_ID` only (idempotent retry-safe), so new applicant bookings are not blocked.

## 6) Razorpay Account + API Keys (Detailed)

If you do not have a Razorpay account yet, follow this exactly:

1. Open [https://razorpay.com](https://razorpay.com) and click **Sign Up**.
2. Register with your mobile number and email, verify OTP.
3. Complete basic profile details (name, business type, expected payment use).
4. After login, switch to **Test Mode** using the toggle in dashboard top area.
5. Go to **Account & Settings** → **Developers** → **API Keys**.
6. Click **Generate Test Key**.
7. Copy and store safely:
  - `Key Id` (public-ish)
  - `Key Secret` (private, shown once)
8. Put these in Google Sheet `Settings` tab:
  - `Razorpay_Key_Id` in `B4`
  - `Razorpay_Key_Secret` in `B5`
9. Keep `Booking_Fee` in `B2` and `Appointment_Window` in `B3`.
10. Complete full booking tests with test cards/UPI in Razorpay test mode.
11. For live payments later: finish Razorpay KYC/activation and replace with live keys in same cells.

⚠️ Never put Razorpay secret in frontend code or `.env` of the client app.

## 7) Security Checklist (Implemented)

- Signature verification: ✅ `verifySignature` checks `orderId|paymentId`.
- Payment fetched server-side: ✅ checks payment belongs to order, is captured, and amount matches Settings fee.
- Atomic slot save: ✅ `LockService.getScriptLock()` around duplicate-check + slot increment + row insert.
- Duplicate-safe retries: ✅ `bookingAlreadyExists(paymentId)` prevents duplicate rows.
- Server-side slot policy: ✅ only next 3 Thursdays allowed; WAITLIST only when all are full.
- Server-side payload validation: ✅ required applicant fields + email/phone + relation=other filler checks.
- Secrets handling: ✅ keys stored in Google Sheet / Apps Script only (not frontend).
- Confirmation email: ✅ applicant confirmation email is sent after verified save (logged if email provider fails).

## 8) Data Format Note (Documents)

- Current frontend flow uses predefined document options only.
- At least one document is required; users can continue with one.
- `documentsOther` may still be present as blank/legacy for backward compatibility, but the UI no longer asks for custom "Other" input.

## 9) Slot Time/Capacity from Sheet (Operations)

- You can control slot count and slot time from the `Slots` sheet.
- `Max_Slots` controls capacity per date.
- `Time_Window` controls time per date (optional). If empty, `Settings!Appointment_Window` is used.
- Frontend displays slot date + time in Indian format and uses the returned `timeWindow` value.

## 10) CORS & Preflight (Production Note)

Why the current flow works:

- Browser requests are currently sent as **simple requests**.
- Frontend posts string payload with `Content-Type: text/plain;charset=UTF-8`.
- No custom request headers are used.

Important limitation:

- Google Apps Script Web Apps are not ideal for handling full browser preflight (`OPTIONS`) customization like a normal server.
- If you later add non-simple headers/content types (for example `application/json` with extra custom headers), some browsers may trigger preflight and block calls.

Recommended safe practice:

- Keep frontend Apps Script calls as simple requests (current implementation).
- Do not add custom headers to browser calls for this endpoint.
- Keep all secrets and verification on server-side Apps Script only.

If you need strict/custom CORS in future:

- Add a small proxy layer (Cloud Run / Firebase Function / Netlify Function) in front of Apps Script.
- Handle `OPTIONS` + CORS headers in proxy.
- Forward validated requests server-to-server to Apps Script.

### Netlify Proxy Template (Now Added)

This repo now includes a minimal proxy at `netlify/functions/booking-proxy.mjs` with:

- `OPTIONS` handling for browser preflight.
- `POST` passthrough to Apps Script.
- action allowlist (`getSlots`, `getBookingFee`, `createOrder`, `verifyPaymentAndSave`).

Also configured in `netlify.toml`:

- `/api/booking` → `/.netlify/functions/booking-proxy`

#### Netlify Environment Variables

In Netlify site settings, add:

- `NETLIFY_BOOKING_SCRIPT_URL = https://script.google.com/macros/s/<YOUR_DEPLOYMENT_ID>/exec`

Frontend env:

- `VITE_BOOKING_API_URL=/api/booking` (preferred)
- `VITE_BOOKING_SCRIPT_URL=...` remains as direct fallback

The frontend API client already prefers `VITE_BOOKING_API_URL` and falls back to `VITE_BOOKING_SCRIPT_URL`.
