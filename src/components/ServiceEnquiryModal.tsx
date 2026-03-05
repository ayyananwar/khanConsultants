import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { submitServiceEnquiry } from '../api/serviceEnquiryApi';
import { openBirthBooking } from '../lib/birthBookingLauncher';
import type { ServiceType } from '../types/serviceEnquiry';

interface ServiceEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceType;
}

type PreferredCommunication = 'WhatsApp' | 'Phone call' | 'Email';
type ServiceSelectionType = ServiceType | 'birth-certificate';

interface FormState {
  serviceType?: ServiceSelectionType;
  subServiceType?: string;
  fullName: string;
  designation: string;
  officialBusinessName: string;
  phone: string;
  email: string;
  alternateNumber: string;
  businessAddress: string;
  preferredCommunication: PreferredCommunication;
  additionalNotes: string;
  consentAccepted: boolean;
  data: Record<string, unknown>;
}

const SERVICE_OPTIONS: Array<{ value: ServiceSelectionType; label: string }> = [
  { value: 'birth-certificate', label: 'Birth Certificate' },
  { value: 'gst', label: 'GST Services' },
  { value: 'fssai', label: 'FSSAI Food Licence' },
  { value: 'drug-licence', label: 'Pharmacy / Drug Licence' },
  { value: 'kmc', label: 'KMC Services' },
  { value: 'personal-documentation', label: 'Personal Documentation' },
  { value: 'trademark-marketplace', label: 'Trademark & Marketplace' },
];

const initialState: FormState = {
  fullName: '',
  designation: '',
  officialBusinessName: '',
  phone: '',
  email: '',
  alternateNumber: '',
  businessAddress: '',
  preferredCommunication: 'WhatsApp',
  additionalNotes: '',
  consentAccepted: false,
  data: {},
};

function normalizePhone(value: string): string {
  return value.replace(/\D/g, '').slice(0, 10);
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function toRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
}

export default function ServiceEnquiryModal({ isOpen, onClose, preselectedService }: ServiceEnquiryModalProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successReference, setSuccessReference] = useState('');

  const totalSteps = useMemo(() => (preselectedService ? 3 : 4), [preselectedService]);
  const serviceSelectStep = preselectedService ? -1 : 0;
  const clientDetailsStep = preselectedService ? 0 : 1;
  const serviceDetailsStep = preselectedService ? 1 : 2;
  const finalStep = preselectedService ? 2 : 3;

  const redirectToBirthBooking = () => {
    openBirthBooking();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm({
      ...initialState,
      serviceType: preselectedService,
    });
    setErrorMessage('');
    setSubmitting(false);
    setSuccessReference('');
    setStep(preselectedService ? 0 : 0);
  }, [isOpen, preselectedService]);

  useEffect(() => {
    if (!isOpen) return;
    const body = document.body;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const setData = (key: string, value: unknown) => {
    setForm((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [key]: value,
      },
    }));
  };

  const validateStep = (): boolean => {
    if (!form.serviceType && step >= clientDetailsStep) {
      setErrorMessage('Please select a service.');
      return false;
    }

    if (step === serviceSelectStep && !preselectedService) {
      if (!form.serviceType) {
        setErrorMessage('Please select a service to continue.');
        return false;
      }
      return true;
    }

    if (step === clientDetailsStep) {
      if (!form.fullName.trim()) return setAndFalse('Client full name is required.');
      if (!form.officialBusinessName.trim()) return setAndFalse('Official business name is required.');
      if (normalizePhone(form.phone).length !== 10) return setAndFalse('Mobile number must be 10 digits.');
      if (!isEmail(form.email)) return setAndFalse('Valid email is required.');
      if (!form.businessAddress.trim()) return setAndFalse('Business address is required.');
      return true;
    }

    if (step === serviceDetailsStep) {
      const data = toRecord(form.data);
      if (form.serviceType === 'gst') {
        if (!String(data.hasGstNumber || '').trim()) return setAndFalse('Select GST registered status.');
        if (String(data.hasGstNumber) === 'no') {
          if (!String(data.wantGstRegistration || '').trim()) return setAndFalse('Select GST registration intent.');
          if (!String(data.ownershipType || '').trim()) return setAndFalse('Ownership type is required.');
          if (!String(data.monthlyTurnover || '').trim()) return setAndFalse('Monthly turnover is required.');
          if (!String(data.monthlyInvoices || '').trim()) return setAndFalse('Monthly invoices is required.');
          if (!String(data.otpEmail || '').trim() || !isEmail(String(data.otpEmail))) return setAndFalse('Valid OTP email is required.');
          if (normalizePhone(String(data.otpMobile || '')).length !== 10) return setAndFalse('Valid OTP mobile is required.');
          const help = Array.isArray(data.gstHelpNeeded) ? data.gstHelpNeeded : [];
          if (help.length === 0) return setAndFalse('Select at least one GST help need.');
        } else if (!String(data.natureOfInquiry || '').trim()) {
          return setAndFalse('Nature of inquiry is required.');
        }
      }

      if (form.serviceType === 'fssai') {
        if (!String(data.foodBusinessType || '').trim()) return setAndFalse('Food business type is required.');
        if (!String(data.annualTurnover || '').trim()) return setAndFalse('Annual turnover is required.');
        if (!String(data.licenseTypeIfKnown || '').trim()) return setAndFalse('Licence type is required.');
        if (!String(data.kitchenAddress || '').trim()) return setAndFalse('Kitchen address is required.');
        if (!String(data.hasTradeLicense || '').trim()) return setAndFalse('Trade licence status is required.');
      }

      if (form.serviceType === 'drug-licence') {
        if (!String(data.drugLicenseType || '').trim()) return setAndFalse('Drug licence type is required.');
        if (!String(data.hasRegisteredPharmacist || '').trim()) return setAndFalse('Pharmacist status is required.');
        if (String(data.hasRegisteredPharmacist) === 'yes' && !String(data.pharmacistRegistrationNumber || '').trim()) {
          return setAndFalse('Pharmacist registration number is required.');
        }
        if (!String(data.shopAreaSqFt || '').trim()) return setAndFalse('Shop area is required.');
        if (!String(data.refrigeratorAvailable || '').trim()) return setAndFalse('Refrigerator availability is required.');
      }

      if (form.serviceType === 'kmc') {
        if (!String(data.kmcServiceType || '').trim()) return setAndFalse('KMC service type is required.');
        if (!String(data.propertyType || '').trim()) return setAndFalse('Property type is required.');
        if (!String(data.idNumbersAndDetails || '').trim()) return setAndFalse('KMC details are required.');
      }

      if (form.serviceType === 'personal-documentation') {
        if (!String(data.personalDocType || '').trim()) return setAndFalse('Document type is required.');
        if (!String(data.applicationNature || '').trim()) return setAndFalse('Application nature is required.');
      }

      if (form.serviceType === 'trademark-marketplace') {
        if (!String(data.businessStructure || '').trim()) return setAndFalse('Business structure is required.');
        if (!String(data.serviceRequired || '').trim()) return setAndFalse('Service required is mandatory.');
        if (!String(data.brandNameOrLogo || '').trim()) return setAndFalse('Brand name/logo is required.');
        if (!String(data.firstUseDate || '').trim()) return setAndFalse('Date of first use is required.');
        if (!String(data.goodsServicesDescription || '').trim()) return setAndFalse('Goods/services description is required.');
        if (!String(data.registrationReason || '').trim()) return setAndFalse('Registration reason is required.');
        if (!String(data.currentSellerStatus || '').trim()) return setAndFalse('Current seller status is required.');
        if (!String(data.brandAuthorization || '').trim()) return setAndFalse('Brand authorization is required.');
        if (!String(data.trademarkStatus || '').trim()) return setAndFalse('Trademark status is required.');
        if (!String(data.skuCount || '').trim()) return setAndFalse('SKU count is required.');
        if (!String(data.pickupAddressType || '').trim()) return setAndFalse('Pickup address type is required.');
      }

      return true;
    }

    if (step === finalStep) {
      if (!form.preferredCommunication) return setAndFalse('Preferred communication is required.');
      if (!form.additionalNotes.trim()) return setAndFalse('Additional notes/comments are required.');
      if (!form.consentAccepted) return setAndFalse('You must accept the service agreement and privacy terms.');
      return true;
    }

    return true;
  };

  const setAndFalse = (message: string): false => {
    setErrorMessage(message);
    return false;
  };

  const handleNext = async () => {
    setErrorMessage('');

    if (step === serviceSelectStep && form.serviceType === 'birth-certificate') {
      redirectToBirthBooking();
      return;
    }

    if (!validateStep()) {
      return;
    }

    if (step >= totalSteps - 1) {
      await handleSubmit();
      return;
    }

    setStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const handleBack = () => {
    setErrorMessage('');
    setStep((prev) => Math.max(0, prev - 1));
  };

  const handleServiceSelection = (serviceType: ServiceSelectionType) => {
    setErrorMessage('');
    setForm((prev) => ({ ...prev, serviceType }));

    if (serviceType === 'birth-certificate') {
      redirectToBirthBooking();
      return;
    }

    setStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  const handleSubmit = async () => {
    if (!form.serviceType) {
      setErrorMessage('Service type is missing.');
      return;
    }

    if (form.serviceType === 'birth-certificate') {
      redirectToBirthBooking();
      return;
    }

    try {
      setSubmitting(true);
      const result = await submitServiceEnquiry(
        {
          serviceType: form.serviceType,
          subServiceType: form.subServiceType,
          fullName: form.fullName.trim(),
          designation: form.designation.trim() || undefined,
          officialBusinessName: form.officialBusinessName.trim(),
          phone: normalizePhone(form.phone),
          email: form.email.trim(),
          alternateNumber: form.alternateNumber.trim() || undefined,
          businessAddress: form.businessAddress.trim(),
          preferredCommunication: form.preferredCommunication,
          additionalNotes: form.additionalNotes.trim(),
          consentAccepted: true,
          data: form.data,
        },
      );

      setSuccessReference(result.enquiryReference);
      setStep(totalSteps);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  };

  const updateText = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const data = toRecord(form.data);

  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm">
      <div className="h-full w-full bg-white text-gray-900 flex flex-col">
        <div className="border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="max-w-4xl mx-auto relative flex items-center justify-between min-h-10">
            <button
              type="button"
              onClick={step === totalSteps ? onClose : handleBack}
              disabled={submitting || step === 0}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 disabled:opacity-40"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
            <p className="absolute left-1/2 -translate-x-1/2 text-[11px] sm:text-sm font-semibold text-gray-600 max-w-[180px] sm:max-w-none truncate text-center">
              Service Request Form
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full border border-red-300 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 hover:border-red-400"
              aria-label="Close"
            >
              <FaTimes />
            </button>
          </div>
          <div className="max-w-4xl mx-auto mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-[var(--color-3d6b56)] transition-all duration-300" style={{ width: `${Math.min(100, ((Math.min(step, totalSteps) + 1) / (totalSteps + 1)) * 100)}%` }} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 sm:px-6 pt-4 sm:pt-8 pb-24 sm:pb-8">
          <div className="max-w-4xl mx-auto">
          {step === totalSteps ? (
            <div className="h-full grid place-items-center text-center">
              <div className="max-w-lg">
                <FaCheckCircle className="mx-auto text-5xl text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enquiry Submitted</h3>
                <p className="text-gray-600 mb-4">Your request has been received successfully.</p>
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-sm text-emerald-800">Reference ID</p>
                  <p className="text-xl font-bold text-emerald-900 tracking-wide">{successReference}</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">Our team will contact you soon via your preferred communication mode.</p>
              </div>
            </div>
          ) : (
            <>
              {errorMessage ? (
                <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</div>
              ) : null}

              {step === serviceSelectStep && !preselectedService ? (
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Select Service</h3>
                  <p className="text-sm text-gray-600 mb-5">Choose your service to instantly continue to the next step.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SERVICE_OPTIONS.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => handleServiceSelection(value)}
                        className={`text-left rounded-xl border px-4 py-3 transition-all ${form.serviceType === value ? 'border-[var(--color-3d6b56)] bg-emerald-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <p className="font-semibold text-gray-900">{label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              {step === clientDetailsStep ? (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Client Details</h2>
                  <p className="text-sm text-gray-600 mb-5">Provide your core contact and business details so our team can review your request properly.</p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
                    <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Client Full Name *">
                      <input className="input" value={form.fullName} onChange={(e) => updateText('fullName', e.target.value)} />
                    </Field>
                    <Field label="Designation">
                      <select className="input" value={form.designation} onChange={(e) => updateText('designation', e.target.value)}>
                        <option value="">Select</option>
                        <option>Owner</option>
                        <option>Director</option>
                        <option>Partner</option>
                        <option>Manager</option>
                        <option>Employee</option>
                        <option>Other</option>
                      </select>
                    </Field>
                    <Field label="Official Business Name *">
                      <input className="input" value={form.officialBusinessName} onChange={(e) => updateText('officialBusinessName', e.target.value)} />
                    </Field>
                    <Field label="Mobile Number (WhatsApp) *">
                      <input className="input" value={form.phone} onChange={(e) => updateText('phone', normalizePhone(e.target.value))} />
                    </Field>
                    <Field label="Client Email *">
                      <input className="input" type="email" value={form.email} onChange={(e) => updateText('email', e.target.value)} />
                    </Field>
                    <Field label="Alternate Number">
                      <input className="input" value={form.alternateNumber} onChange={(e) => updateText('alternateNumber', e.target.value)} />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Full Business Address *">
                        <textarea className="input min-h-[92px]" value={form.businessAddress} onChange={(e) => updateText('businessAddress', e.target.value)} />
                      </Field>
                    </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {step === serviceDetailsStep ? (
                <ServiceSpecificFields serviceType={form.serviceType} data={data} setData={setData} />
              ) : null}

              {step === finalStep ? (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-2">Final Details & Consent</h2>
                  <p className="text-sm text-gray-600 mb-5">Confirm communication preference, add any final instructions, and submit your request.</p>

                  <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <Field label="Preferred Mode of Communication *">
                        <select
                          className="input"
                          value={form.preferredCommunication}
                          onChange={(e) => setForm((prev) => ({ ...prev, preferredCommunication: e.target.value as PreferredCommunication }))}
                        >
                          <option>WhatsApp</option>
                          <option>Phone call</option>
                          <option>Email</option>
                        </select>
                      </Field>
                    </div>

                    <Field label="Any additional notes / comments *">
                      <textarea className="input min-h-[96px]" value={form.additionalNotes} onChange={(e) => updateText('additionalNotes', e.target.value)} />
                    </Field>

                    <label className="flex items-start gap-3 text-sm text-gray-700">
                      <input
                        type="checkbox"
                        checked={form.consentAccepted}
                        onChange={(e) => setForm((prev) => ({ ...prev, consentAccepted: e.target.checked }))}
                        className="mt-1"
                      />
                      <span>
                        By checking this box, I confirm the information is accurate and agree to share it with Khan Consultants and partner service providers for quote and execution.
                      </span>
                    </label>
                  </div>
                </div>
              ) : null}
            </>
          )}
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 bg-white">
          <div className="max-w-4xl mx-auto pb-[max(env(safe-area-inset-bottom),0px)]">
            <div className="flex items-center justify-center">
              <div className="w-full sm:w-auto flex flex-col sm:items-center gap-1.5">
                {step < totalSteps && !(step === serviceSelectStep && !preselectedService) ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-3d6b56)] px-8 py-3.5 text-base sm:text-lg font-bold text-white disabled:opacity-40 disabled:cursor-not-allowed w-full sm:min-w-[320px] sm:w-auto"
                  >
                    {submitting ? 'Submitting...' : (step === totalSteps - 1 ? 'Submit' : 'Continue')} <FaArrowRight />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs sm:text-sm font-semibold text-gray-700">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}

function ServiceSection({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-600 mb-5">{subtitle}</p>
      <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">{children}</div>
    </div>
  );
}

function ServiceSpecificFields({
  serviceType,
  data,
  setData,
}: {
  serviceType?: ServiceSelectionType;
  data: Record<string, unknown>;
  setData: (key: string, value: unknown) => void;
}) {
  if (!serviceType) {
    return <p className="text-sm text-gray-500">Select a service first.</p>;
  }

  if (serviceType === 'birth-certificate') {
    return <p className="text-sm text-amber-700">Birth Certificate uses a dedicated flow.</p>;
  }

  if (serviceType === 'gst') {
    const hasGstNumber = String(data.hasGstNumber || '');
    const gstHelpNeeded = Array.isArray(data.gstHelpNeeded) ? data.gstHelpNeeded as string[] : [];

    const toggleHelp = (value: string) => {
      if (gstHelpNeeded.includes(value)) {
        setData('gstHelpNeeded', gstHelpNeeded.filter((item) => item !== value));
        return;
      }
      setData('gstHelpNeeded', [...gstHelpNeeded, value]);
    };

    return (
      <ServiceSection title="GST Details" subtitle="Tell us your GST registration status and what support you need.">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Do you already have a GST number? *">
            <select className="input" value={hasGstNumber} onChange={(e) => setData('hasGstNumber', e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </Field>

          {hasGstNumber === 'yes' || hasGstNumber === 'not-sure' ? (
            <Field label="Nature of inquiry *">
              <select className="input" value={String(data.natureOfInquiry || '')} onChange={(e) => setData('natureOfInquiry', e.target.value)}>
                <option value="">Select</option>
                <option>Routine Compliance / Return Filing</option>
                <option>ITC Blockage/Mismatch</option>
                <option>Refund Application/Delay</option>
                <option>GSTR-3B Amendment/Correction</option>
                <option>HSN/Rate Classification</option>
                <option>Audit Notice/Departmental Reply</option>
                <option>General Advice/Consulting</option>
              </select>
            </Field>
          ) : null}

          {hasGstNumber === 'no' ? (
            <>
              <Field label="Do you want GST registration? *">
                <select className="input" value={String(data.wantGstRegistration || '')} onChange={(e) => setData('wantGstRegistration', e.target.value)}>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>Yes, need information</option>
                  <option>Not sure</option>
                  <option>No</option>
                </select>
              </Field>
              <Field label="Business ownership type *">
                <select className="input" value={String(data.ownershipType || '')} onChange={(e) => setData('ownershipType', e.target.value)}>
                  <option value="">Select</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>Pvt Ltd / LLP</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Approx monthly turnover *">
                <select className="input" value={String(data.monthlyTurnover || '')} onChange={(e) => setData('monthlyTurnover', e.target.value)}>
                  <option value="">Select</option>
                  <option>Below ₹1,00,000</option>
                  <option>₹1,00,000 – ₹3,00,000</option>
                  <option>₹3,00,000 – ₹5,00,000</option>
                  <option>₹5,00,000 – ₹10,00,000</option>
                  <option>₹10,00,000+</option>
                </select>
              </Field>
              <Field label="Approx monthly invoices *">
                <select className="input" value={String(data.monthlyInvoices || '')} onChange={(e) => setData('monthlyInvoices', e.target.value)}>
                  <option value="">Select</option>
                  <option>0–20</option>
                  <option>20–50</option>
                  <option>50–100</option>
                  <option>100+</option>
                </select>
              </Field>
              <Field label="OTP email *">
                <input className="input" type="email" value={String(data.otpEmail || '')} onChange={(e) => setData('otpEmail', e.target.value)} />
              </Field>
              <Field label="OTP mobile (Aadhaar linked) *">
                <input className="input" value={String(data.otpMobile || '')} onChange={(e) => setData('otpMobile', normalizePhone(e.target.value))} />
              </Field>
              <div className="sm:col-span-2">
                <p className="text-sm font-semibold text-gray-700 mb-2">What accounting/GST help do you need? *</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'GST Registration',
                    'Monthly GST Filing',
                    'Bookkeeping',
                    'GST Audit',
                    'GST Notice Reply',
                    'E-commerce Filing',
                    'Switch from current CA',
                    'Not sure / need advice',
                  ].map((item) => (
                    <label key={item} className="text-sm text-gray-700 flex items-center gap-2">
                      <input type="checkbox" checked={gstHelpNeeded.includes(item)} onChange={() => toggleHelp(item)} />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </ServiceSection>
    );
  }

  if (serviceType === 'fssai') {
    return (
      <ServiceSection title="FSSAI Details" subtitle="Share your food business details so we can guide the right licence path.">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Type of food business *">
            <input className="input" value={String(data.foodBusinessType || '')} onChange={(e) => setData('foodBusinessType', e.target.value)} />
          </Field>
          <Field label="Annual turnover *">
            <input className="input" value={String(data.annualTurnover || '')} onChange={(e) => setData('annualTurnover', e.target.value)} />
          </Field>
          <Field label="Licence type (if known) *">
            <input className="input" value={String(data.licenseTypeIfKnown || '')} onChange={(e) => setData('licenseTypeIfKnown', e.target.value)} />
          </Field>
          <Field label="Do you have a trade licence? *">
            <select className="input" value={String(data.hasTradeLicense || '')} onChange={(e) => setData('hasTradeLicense', e.target.value)}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
              <option>Not sure</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Kitchen/Premises address *">
              <textarea className="input min-h-[92px]" value={String(data.kitchenAddress || '')} onChange={(e) => setData('kitchenAddress', e.target.value)} />
            </Field>
          </div>
        </div>
      </ServiceSection>
    );
  }

  if (serviceType === 'drug-licence') {
    return (
      <ServiceSection title="Drug Licence Details" subtitle="Provide pharmacy setup details for licence eligibility review.">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Type of drug licence required *">
            <input className="input" value={String(data.drugLicenseType || '')} onChange={(e) => setData('drugLicenseType', e.target.value)} />
          </Field>
          <Field label="Registered pharmacist available? *">
            <select className="input" value={String(data.hasRegisteredPharmacist || '')} onChange={(e) => setData('hasRegisteredPharmacist', e.target.value)}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not-sure">Not sure</option>
            </select>
          </Field>
          {String(data.hasRegisteredPharmacist || '') === 'yes' ? (
            <Field label="Pharmacist registration number *">
              <input className="input" value={String(data.pharmacistRegistrationNumber || '')} onChange={(e) => setData('pharmacistRegistrationNumber', e.target.value)} />
            </Field>
          ) : null}
          <Field label="Shop area (sq.ft.) *">
            <input className="input" value={String(data.shopAreaSqFt || '')} onChange={(e) => setData('shopAreaSqFt', e.target.value)} />
          </Field>
          <Field label="Refrigerator available? *">
            <select className="input" value={String(data.refrigeratorAvailable || '')} onChange={(e) => setData('refrigeratorAvailable', e.target.value)}>
              <option value="">Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
        </div>
      </ServiceSection>
    );
  }

  if (serviceType === 'kmc') {
    return (
      <ServiceSection title="KMC Details" subtitle="Share your KMC service requirement and related property details.">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="KMC service required *">
            <select className="input" value={String(data.kmcServiceType || '')} onChange={(e) => setData('kmcServiceType', e.target.value)}>
              <option value="">Select</option>
              <option value="trade-licence">Trade Licence</option>
              <option value="mutation">Mutation</option>
              <option value="assessment-correction">Assessment / Correction</option>
              <option value="property-tax">Property Tax Issue</option>
            </select>
          </Field>
          <Field label="Property type *">
            <select className="input" value={String(data.propertyType || '')} onChange={(e) => setData('propertyType', e.target.value)}>
              <option value="">Select</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Mixed</option>
              <option>Land</option>
              <option>NA</option>
            </select>
          </Field>
          <div className="sm:col-span-2">
            <Field label="Provide IDs, numbers and details *">
              <textarea className="input min-h-[96px]" value={String(data.idNumbersAndDetails || '')} onChange={(e) => setData('idNumbersAndDetails', e.target.value)} />
            </Field>
          </div>
        </div>
      </ServiceSection>
    );
  }

  if (serviceType === 'personal-documentation') {
    return (
      <ServiceSection title="Personal Documentation Details" subtitle="Select document and application type to help us prepare your case.">
        <div className="grid sm:grid-cols-2 gap-3">
          <Field label="Document type *">
            <select className="input" value={String(data.personalDocType || '')} onChange={(e) => setData('personalDocType', e.target.value)}>
              <option value="">Select</option>
              <option>PAN</option>
              <option>Aadhaar</option>
              <option>Passport Support</option>
              <option>Death Certificate</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Nature of application *">
            <select className="input" value={String(data.applicationNature || '')} onChange={(e) => setData('applicationNature', e.target.value)}>
              <option value="">Select</option>
              <option>New</option>
              <option>Correction</option>
              <option>Duplicate</option>
              <option>Update</option>
              <option>Not sure</option>
            </select>
          </Field>
        </div>
      </ServiceSection>
    );
  }

  return (
    <ServiceSection title="Trademark & Marketplace Details" subtitle="Provide brand and marketplace information for filing and onboarding support.">
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Business structure *">
          <input className="input" value={String(data.businessStructure || '')} onChange={(e) => setData('businessStructure', e.target.value)} />
        </Field>
        <Field label="Service required *">
          <input className="input" value={String(data.serviceRequired || '')} onChange={(e) => setData('serviceRequired', e.target.value)} />
        </Field>
        <Field label="Brand name/logo to be registered *">
          <input className="input" value={String(data.brandNameOrLogo || '')} onChange={(e) => setData('brandNameOrLogo', e.target.value)} />
        </Field>
        <Field label="Date of first use in India *">
          <input className="input" type="date" value={String(data.firstUseDate || '')} onChange={(e) => setData('firstUseDate', e.target.value)} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Goods/Services description *">
            <textarea className="input min-h-[88px]" value={String(data.goodsServicesDescription || '')} onChange={(e) => setData('goodsServicesDescription', e.target.value)} />
          </Field>
        </div>
        <Field label="Reason for registration *">
          <input className="input" value={String(data.registrationReason || '')} onChange={(e) => setData('registrationReason', e.target.value)} />
        </Field>
        <Field label="Current seller status *">
          <input className="input" value={String(data.currentSellerStatus || '')} onChange={(e) => setData('currentSellerStatus', e.target.value)} />
        </Field>
        <Field label="Target platforms (comma separated) *">
          <input
            className="input"
            value={Array.isArray(data.targetPlatforms) ? (data.targetPlatforms as string[]).join(', ') : ''}
            onChange={(e) => setData('targetPlatforms', e.target.value.split(',').map((v) => v.trim()).filter(Boolean))}
          />
        </Field>
        <Field label="Brand authorization status *">
          <input className="input" value={String(data.brandAuthorization || '')} onChange={(e) => setData('brandAuthorization', e.target.value)} />
        </Field>
        <Field label="Trademark status *">
          <input className="input" value={String(data.trademarkStatus || '')} onChange={(e) => setData('trademarkStatus', e.target.value)} />
        </Field>
        <Field label="SKU count *">
          <input className="input" value={String(data.skuCount || '')} onChange={(e) => setData('skuCount', e.target.value)} />
        </Field>
        <Field label="Pickup address type *">
          <input className="input" value={String(data.pickupAddressType || '')} onChange={(e) => setData('pickupAddressType', e.target.value)} />
        </Field>
        <Field label="Support needed (comma separated) *">
          <input
            className="input"
            value={Array.isArray(data.supportNeeded) ? (data.supportNeeded as string[]).join(', ') : ''}
            onChange={(e) => setData('supportNeeded', e.target.value.split(',').map((v) => v.trim()).filter(Boolean))}
          />
        </Field>
      </div>
    </ServiceSection>
  );
}
