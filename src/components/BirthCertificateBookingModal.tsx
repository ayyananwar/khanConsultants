import { useEffect, useMemo, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaCheckCircle, FaIdBadge, FaLock, FaTimes, FaWhatsapp } from 'react-icons/fa';
import {
  createRazorpayOrder,
  getAvailableSlots,
  getBookingFee,
  verifyPaymentAndSave,
} from '../api/birthBookingApi';
import type {
  ApplicationType,
  BookingConfirmationData,
  BookingFeeResponse,
  BookingFormData,
  CorrectionEntry,
  CorrectionField,
  RelationshipToApplicant,
  SlotOption,
} from '../types/birthBooking';

interface BirthCertificateBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayConstructor {
  new (options: Record<string, unknown>): RazorpayInstance;
}

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

const DOCUMENT_OPTIONS = [
  'Old Birth Certificate',
  'Discharge Certificate',
  'Class 10 Admit Card',
  'Vaccination Card',
  'Passport',
  'Voter ID',
  'PAN Card',
  'Driving License',
];

const APPLICATION_OPTIONS: Array<{ label: string; value: ApplicationType }> = [
  { label: 'New', value: 'new' },
  { label: 'Correction', value: 'correction' },
  { label: 'Digital', value: 'digital' },
  { label: 'Lost / Destroyed', value: 'lost-destroyed' },
  { label: 'Get a Copy', value: 'get-copy' },
];

const RELATIONSHIP_OPTIONS: RelationshipToApplicant[] = ['Father', 'Mother', 'Spouse', 'Guardian', 'Sibling', 'Child', 'Other'];

const CORRECTION_FIELDS: CorrectionField[] = ['Name', 'DOB', 'Address', 'Other'];

type DynamicStepKey =
  | 'relation'
  | 'filler'
  | 'application'
  | 'applicant'
  | 'correction-select'
  | 'documents'
  | 'slot'
  | 'contact'
  | 'review'
  | 'legal'
  | 'payment'
  | 'confirmation'
  | `correction-${CorrectionField}`;

const initialFormData: BookingFormData = {
  relation: 'self',
  fillerName: '',
  fillerEmail: '',
  fillerPhone: '',
  relationshipToApplicant: 'Father',
  relationshipOther: '',
  applicationType: 'new',
  applicationTypeOther: '',
  applicantName: '',
  applicantDob: '',
  applicantPhone: '',
  applicantEmail: '',
  correctionEntries: [],
  documents: [],
  documentsOther: '',
  chosenThursday: '',
};

function getInitialFormData(overrides?: Partial<BookingFormData>): BookingFormData {
  return {
    ...initialFormData,
    ...overrides,
  };
}

function normalizePhone(value: string): string {
  return value.replace(/\D/g, '').slice(0, 10);
}

function formatDateLabel(value: string): string {
  if (value === 'WAITLIST') {
    return 'WAITLIST';
  }
  if (!value) {
    return '—';
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function formatIndianDateTime(dateValue: string, timeWindow: string): string {
  if (dateValue === 'WAITLIST') {
    return 'WAITLIST';
  }
  if (!dateValue) {
    return '—';
  }
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return `${dateValue} • ${timeWindow}`;
  }
  return `${date.toLocaleDateString('en-IN', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })} • ${timeWindow} IST`;
}

function isCorrectionDetailStep(step: DynamicStepKey): step is `correction-${CorrectionField}` {
  return step.startsWith('correction-') && step !== 'correction-select';
}

function getCorrectionFieldFromStep(step: `correction-${CorrectionField}`): CorrectionField {
  return step.replace('correction-', '') as CorrectionField;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function stepDisplayName(step: DynamicStepKey): string {
  if (step === 'correction-select') return 'Correction details';
  if (isCorrectionDetailStep(step)) return `Correction: ${getCorrectionFieldFromStep(step)}`;
  return step.replace('-', ' ').replace(/\b\w/g, (s) => s.toUpperCase());
}

async function loadRazorpayScript(): Promise<void> {
  if (window.Razorpay) {
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Unable to load Razorpay checkout'));
    document.body.appendChild(script);
  });
}

export default function BirthCertificateBookingModal({ isOpen, onClose }: BirthCertificateBookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>(getInitialFormData());
  const [stepIndex, setStepIndex] = useState(0);
  const [slots, setSlots] = useState<SlotOption[]>([]);
  const [allSlotsFull, setAllSlotsFull] = useState(false);
  const [waitlistAllowed, setWaitlistAllowed] = useState(false);
  const [bookingFee, setBookingFee] = useState<BookingFeeResponse | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [confirmation, setConfirmation] = useState<BookingConfirmationData | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [legalPopup, setLegalPopup] = useState<'terms' | 'privacy' | null>(null);
  const [isDobPickerOpen, setIsDobPickerOpen] = useState(false);
  const dobInputRef = useRef<HTMLInputElement | null>(null);
  const [isCorrectionIncorrectDobPickerOpen, setIsCorrectionIncorrectDobPickerOpen] = useState(false);
  const [isCorrectionCorrectDobPickerOpen, setIsCorrectionCorrectDobPickerOpen] = useState(false);
  const correctionIncorrectDobInputRef = useRef<HTMLInputElement | null>(null);
  const correctionCorrectDobInputRef = useRef<HTMLInputElement | null>(null);

  const activeSteps = useMemo<DynamicStepKey[]>(() => {
    const steps: DynamicStepKey[] = ['relation'];

    if (formData.relation === 'other') {
      steps.push('filler');
    }

    steps.push('application');

    if (formData.applicationType === 'correction') {
      steps.push('correction-select');
      formData.correctionEntries.forEach((entry) => {
        steps.push(`correction-${entry.field}`);
      });
    }

    steps.push('applicant');

    steps.push('documents', 'slot', 'contact', 'review', 'legal', 'payment', 'confirmation');
    return steps;
  }, [formData.relation, formData.applicationType, formData.correctionEntries]);

  const currentStep = activeSteps[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / activeSteps.length) * 100);
  const todayIso = new Date().toISOString().split('T')[0];
  const selectedSlot = useMemo(() => slots.find((slot) => slot.date === formData.chosenThursday), [slots, formData.chosenThursday]);
  const selectedTimeWindow = selectedSlot?.timeWindow || bookingFee?.appointmentWindow || 'Will be shared on confirmation';

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setFormData(getInitialFormData());
    setStepIndex(0);
    setErrorMessage('');
    setConfirmation(null);
    setTermsAccepted(false);
    setLegalPopup(null);
    setIsDobPickerOpen(false);
    setIsCorrectionIncorrectDobPickerOpen(false);
    setIsCorrectionCorrectDobPickerOpen(false);
  }, [isOpen]);

  useEffect(() => {
    if (stepIndex >= activeSteps.length) {
      setStepIndex(Math.max(0, activeSteps.length - 1));
    }
  }, [activeSteps.length, stepIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let cancelled = false;

    const preload = async () => {
      try {
        setLoadingSlots(true);
        const [slotData, feeData] = await Promise.all([getAvailableSlots(), getBookingFee()]);
        if (cancelled) {
          return;
        }
        setSlots(slotData.slots);
        setAllSlotsFull(slotData.allFull);
        setWaitlistAllowed(slotData.waitlistAllowed);
        setBookingFee(feeData);
      } catch (error) {
        if (!cancelled) {
          setErrorMessage(error instanceof Error ? error.message : "We couldn't load booking details. Please try again.");
        }
      } finally {
        if (!cancelled) {
          setLoadingSlots(false);
        }
      }
    };

    void preload();

    return () => {
      cancelled = true;
    };
  }, [isOpen]);

  const updateFormField = <K extends keyof BookingFormData>(key: K, value: BookingFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrorMessage('');
  };

  const handleFillerPhoneChange = (value: string) => {
    const normalized = normalizePhone(value);
    updateFormField('fillerPhone', normalized);
  };

  const handleApplicantPhoneChange = (value: string) => {
    const normalized = normalizePhone(value);
    updateFormField('applicantPhone', normalized);
  };

  const validateCurrentStep = (showError: boolean) => {
    const fail = (message: string) => {
      if (showError) {
        setErrorMessage(message);
      }
      return false;
    };

    if (currentStep === 'relation') {
      return true;
    }

    if (currentStep === 'filler') {
      if (!formData.fillerName.trim()) {
        return fail('Please enter your full name.');
      }
      if (!formData.relationshipToApplicant) {
        return fail('Please select your relationship to the applicant.');
      }
      if (formData.relationshipToApplicant === 'Other' && !formData.relationshipOther.trim()) {
        return fail('Please specify your relationship to the applicant.');
      }
      return true;
    }

    if (currentStep === 'application') {
      if (!formData.applicationType) {
        return fail('Please select application type.');
      }
      return true;
    }

    if (currentStep === 'applicant') {
      if (!formData.applicantName.trim() || !formData.applicantDob) {
        return fail('Please enter applicant name and date of birth.');
      }
      return true;
    }

    if (currentStep === 'correction-select') {
      if (formData.correctionEntries.length === 0) {
        return fail('Please select at least one correction field.');
      }
      return true;
    }

    if (isCorrectionDetailStep(currentStep)) {
      const field = getCorrectionFieldFromStep(currentStep);
      const entry = formData.correctionEntries.find((item) => item.field === field);
      if (!entry || !entry.incorrectValue.trim() || !entry.correctValue.trim()) {
        return fail(`Please fill both incorrect and correct values for ${field}.`);
      }
      return true;
    }

    if (currentStep === 'documents') {
      if (formData.documents.length === 0) {
        return fail('Please select at least one document.');
      }
      if (formData.documents.length > 4) {
        return fail('Please select up to four documents.');
      }
      return true;
    }

    if (currentStep === 'slot') {
      if (!formData.chosenThursday) {
        return fail('Please select an appointment slot.');
      }
      return true;
    }

    if (currentStep === 'contact') {
      if (formData.relation === 'self') {
        if (formData.applicantPhone.replace(/\D/g, '').length !== 10) {
          return fail('Please enter a valid 10-digit applicant phone number.');
        }
        if (!isValidEmail(formData.applicantEmail)) {
          return fail('Please enter a valid applicant email address.');
        }
        return true;
      }

      if (formData.fillerPhone.replace(/\D/g, '').length !== 10) {
        return fail('Please enter a valid 10-digit representative phone number.');
      }
      if (!isValidEmail(formData.fillerEmail)) {
        return fail('Please enter a valid representative email address.');
      }
      return true;
    }

    if (currentStep === 'review') {
      return true;
    }

    if (currentStep === 'payment') {
      return Boolean(bookingFee);
    }

    if (currentStep === 'legal') {
      if (!termsAccepted) {
        return fail('Please accept the Terms & Conditions and Privacy Policy to continue.');
      }
      return true;
    }

    return true;
  };

  const goNext = () => {
    if (!validateCurrentStep(true)) {
      return;
    }
    if (stepIndex < activeSteps.length - 1) {
      setStepIndex((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (stepIndex > 0) {
      setErrorMessage('');
      setStepIndex((prev) => prev - 1);
    }
  };

  const toggleDocument = (doc: string) => {
    setFormData((prev) => {
      const exists = prev.documents.includes(doc);
      const nextDocs = exists ? prev.documents.filter((item) => item !== doc) : [...prev.documents, doc];

      if (nextDocs.length > 4) {
        return prev;
      }

      return {
        ...prev,
        documents: nextDocs,
      };
    });
  };

  const addCorrectionEntry = (field: CorrectionField) => {
    setFormData((prev) => {
      if (prev.correctionEntries.some((entry) => entry.field === field)) {
        return prev;
      }
      const ordered = [...prev.correctionEntries, { field, incorrectValue: '', correctValue: '' }];
      ordered.sort((a, b) => CORRECTION_FIELDS.indexOf(a.field) - CORRECTION_FIELDS.indexOf(b.field));
      return {
        ...prev,
        correctionEntries: ordered,
      };
    });
  };

  const removeCorrectionEntry = (field: CorrectionField) => {
    setFormData((prev) => ({
      ...prev,
      correctionEntries: prev.correctionEntries.filter((entry) => entry.field !== field),
    }));
  };

  const updateCorrectionEntry = (field: CorrectionField, patch: Partial<CorrectionEntry>) => {
    setFormData((prev) => ({
      ...prev,
      correctionEntries: prev.correctionEntries.map((entry) => (entry.field === field ? { ...entry, ...patch } : entry)),
    }));
  };

  const handlePayment = async () => {
    if (!bookingFee) {
      setErrorMessage('Booking fee is currently unavailable. Please refresh and try again.');
      return;
    }

    if (!validateCurrentStep(true)) {
      return;
    }

    const contactPhone = formData.relation === 'self' ? formData.applicantPhone : formData.fillerPhone;
    const contactEmail = formData.relation === 'self' ? formData.applicantEmail : formData.fillerEmail;
    const contactName = formData.relation === 'self' ? formData.applicantName : formData.fillerName;

    const normalizedFormData: BookingFormData = {
      ...formData,
      fillerName: formData.relation === 'self' ? formData.applicantName : formData.fillerName,
      fillerPhone: formData.relation === 'self' ? formData.applicantPhone : formData.fillerPhone,
      fillerEmail: formData.relation === 'self' ? formData.applicantEmail : formData.fillerEmail,
      applicantPhone: formData.relation === 'self' ? formData.applicantPhone : (formData.applicantPhone || formData.fillerPhone),
      applicantEmail: formData.relation === 'self' ? formData.applicantEmail : (formData.applicantEmail || formData.fillerEmail),
    };

    try {
      setProcessingPayment(true);
      setErrorMessage('');
      await loadRazorpayScript();

      const order = await createRazorpayOrder({
        applicantName: contactName,
        applicantEmail: contactEmail,
        applicantPhone: contactPhone,
      });

      if (!window.Razorpay) {
        throw new Error('Razorpay checkout not available');
      }

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amountSubunits,
        currency: order.currency,
        order_id: order.orderId,
        name: 'Khan Consultants',
        description: 'Birth Certificate Consultation Booking',
        prefill: {
          name: contactName,
          email: contactEmail,
          contact: contactPhone,
        },
        notes: {
          applicationType: formData.applicationType,
          chosenThursday: formData.chosenThursday,
        },
        theme: {
          color: 'var(--color-3d6b56)',
        },
        handler: async (response: RazorpaySuccessResponse) => {
          try {
            const verifyResult = await verifyPaymentAndSave({
              formData: normalizedFormData,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });

            const refreshedSlots = await getAvailableSlots();
            setSlots(refreshedSlots.slots);
            setAllSlotsFull(refreshedSlots.allFull);
            setWaitlistAllowed(refreshedSlots.waitlistAllowed);

            setConfirmation({
              appointmentDate: verifyResult.chosenThursday,
              appointmentWindow: verifyResult.appointmentWindow || bookingFee.appointmentWindow,
              paymentReference: verifyResult.paymentId,
              bookingReference: verifyResult.bookingReference,
            });

            setStepIndex(activeSteps.length - 1);
          } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Payment verification failed. Please try again.');
          } finally {
            setProcessingPayment(false);
          }
        },
        modal: {
          ondismiss: () => {
            setProcessingPayment(false);
          },
        },
      });

      razorpay.open();
    } catch (error) {
      setProcessingPayment(false);
      setErrorMessage(error instanceof Error ? error.message : 'Unable to start payment. Please try again.');
    }
  };

  const startAnotherBooking = async () => {
    const preservedRelation = formData.relation;
    const preservedFillerName = formData.fillerName;
    const preservedFillerPhone = formData.fillerPhone;
    const preservedFillerEmail = formData.fillerEmail;
    const preservedRelationship = formData.relationshipToApplicant;
    const preservedRelationshipOther = formData.relationshipOther;

    setConfirmation(null);
    setErrorMessage('');
    setStepIndex(0);
    setTermsAccepted(false);
    setLegalPopup(null);
    setIsDobPickerOpen(false);
    setIsCorrectionIncorrectDobPickerOpen(false);
    setIsCorrectionCorrectDobPickerOpen(false);
    setFormData(
      getInitialFormData({
        relation: preservedRelation,
        fillerName: preservedFillerName,
        fillerPhone: preservedFillerPhone,
        fillerEmail: preservedFillerEmail,
        relationshipToApplicant: preservedRelationship,
        relationshipOther: preservedRelationshipOther,
      }),
    );

    try {
      setLoadingSlots(true);
      const [slotData, feeData] = await Promise.all([getAvailableSlots(), getBookingFee()]);
      setSlots(slotData.slots);
      setAllSlotsFull(slotData.allFull);
      setWaitlistAllowed(slotData.waitlistAllowed);
      setBookingFee(feeData);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "We couldn't refresh booking details. Please try again.");
    } finally {
      setLoadingSlots(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const canContinue = currentStep === 'relation' ? false : validateCurrentStep(false);
  const whatsappMessage = encodeURIComponent(
    `Hello, I need assistance with Birth Certificate booking. Step: ${stepDisplayName(currentStep)} | Application: ${formData.applicationType}${
      formData.chosenThursday ? ` | Slot: ${formatDateLabel(formData.chosenThursday)}` : ''
    }`,
  );
  const whatsappHref = `https://wa.me/916291139691?text=${whatsappMessage}`;

  const jumpToStep = (stepKey: DynamicStepKey) => {
    const targetIndex = activeSteps.indexOf(stepKey);
    if (targetIndex !== -1) {
      setStepIndex(targetIndex);
      setErrorMessage('');
    }
  };

  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm">
      <div className="h-full w-full bg-white text-gray-900 flex flex-col">
        <div className="border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="max-w-4xl mx-auto relative flex items-center justify-between min-h-10">
            <button
              type="button"
              onClick={goBack}
              disabled={stepIndex === 0 || processingPayment}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 disabled:opacity-40"
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
            <p className="absolute left-1/2 -translate-x-1/2 text-[11px] sm:text-sm font-semibold text-gray-600 max-w-[180px] sm:max-w-none truncate text-center">
              Birth Certificate Booking Form
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 rounded-full border border-red-300 px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 hover:border-red-400"
              aria-label="Close booking form"
            >
              <FaTimes />
            </button>
          </div>
          <div className="max-w-4xl mx-auto mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-[var(--color-3d6b56)] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 sm:px-6 pt-4 sm:pt-8 pb-24 sm:pb-8">
          <div className="max-w-4xl mx-auto">
            {errorMessage && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{errorMessage}</div>
            )}

            {currentStep === 'relation' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Who is this application for?</h2>
                <p className="text-sm text-gray-600 mb-5">Choose who the application is for. This helps us show the correct fields for applicant and representative details.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Yes', value: 'self' },
                    { label: 'No', value: 'other' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        updateFormField('relation', option.value as BookingFormData['relation']);
                        if (option.value === 'self') {
                          updateFormField('relationshipToApplicant', 'Father');
                          updateFormField('relationshipOther', '');
                        }
                        if (stepIndex < activeSteps.length - 1) {
                          setStepIndex((prev) => prev + 1);
                        }
                      }}
                      className={`rounded-2xl border p-5 text-left transition ${
                        formData.relation === option.value ? 'border-[var(--color-3d6b56)] bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="text-lg font-bold">{option.label}</p>
                      <p className="text-sm text-gray-500 mt-1">{option.value === 'self' ? 'I am the applicant' : 'I am applying on behalf of someone else'}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'filler' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Representative details</h2>
                <p className="text-sm text-gray-600 mb-5">Provide the representative’s details exactly as they should appear in communication and verification records.</p>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Full name</label>
                    <input
                      type="text"
                      value={formData.fillerName}
                      onChange={(event) => updateFormField('fillerName', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                      placeholder="Example: Imran Khan"
                      autoComplete="name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Relationship with applicant</label>
                    <select
                      value={formData.relationshipToApplicant}
                      onChange={(event) => updateFormField('relationshipToApplicant', event.target.value as RelationshipToApplicant)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                    >
                      {RELATIONSHIP_OPTIONS.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>

                  {formData.relationshipToApplicant === 'Other' && (
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Specify relationship</label>
                      <input
                        type="text"
                        value={formData.relationshipOther}
                        onChange={(event) => updateFormField('relationshipOther', event.target.value)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                        placeholder="Example: Uncle"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 'application' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Select application type</h2>
                <p className="text-sm text-gray-600 mb-5">Select the request category that best matches your case so processing can start on the correct workflow.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {APPLICATION_OPTIONS.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => {
                        updateFormField('applicationType', item.value as ApplicationType);
                        updateFormField('applicationTypeOther', '');
                        if (stepIndex < activeSteps.length - 1) {
                          setStepIndex((prev) => prev + 1);
                        }
                      }}
                      className={`rounded-2xl border p-5 text-left transition ${
                        formData.applicationType === item.value ? 'border-[var(--color-3d6b56)] bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="text-lg font-bold">{item.label}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        {item.value === 'new' && 'For first-time registration requests.'}
                        {item.value === 'correction' && 'For fixing incorrect details in an existing certificate.'}
                        {item.value === 'digital' && 'For digital copy or digitally accessible records.'}
                        {item.value === 'lost-destroyed' && 'For replacement when certificate is lost or damaged.'}
                        {item.value === 'get-copy' && 'For obtaining an additional certified copy.'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'applicant' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Applicant details</h2>
                <p className="text-sm text-gray-600 mb-5">Use the same name and date of birth shown on official records to avoid correction delays.</p>

                <div className="grid grid-cols-1 gap-4 sm:gap-5">
                  <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
                    <p className="text-sm sm:text-base font-bold text-gray-900 mb-3">Applicant details</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Applicant full name</label>
                        <input
                          type="text"
                          value={formData.applicantName}
                          onChange={(event) => updateFormField('applicantName', event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="As per birth record"
                          autoComplete="name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Date of birth</label>
                        <div
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base inline-flex items-center justify-between gap-3 bg-white cursor-pointer"
                          onClick={() => {
                            const pickerInput = dobInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null;
                            if (!pickerInput) {
                              return;
                            }
                            setIsDobPickerOpen(true);
                            pickerInput.focus();
                            if (typeof pickerInput.showPicker === 'function') {
                              pickerInput.showPicker();
                            }
                          }}
                        >
                          <span className={formData.applicantDob ? 'text-gray-900' : 'text-gray-500'}>
                            {formData.applicantDob ? formatDateLabel(formData.applicantDob) : 'Select date of birth'}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              const pickerInput = dobInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null;
                              if (!pickerInput) {
                                return;
                              }

                              if (isDobPickerOpen) {
                                pickerInput.blur();
                                setIsDobPickerOpen(false);
                                return;
                              }

                              setIsDobPickerOpen(true);
                              pickerInput.focus();
                              if (typeof pickerInput.showPicker === 'function') {
                                pickerInput.showPicker();
                              }
                            }}
                            onMouseDown={(event) => event.preventDefault()}
                            aria-label="Toggle date of birth calendar"
                            className={`inline-flex items-center justify-center h-8 w-8 rounded-full border transition ${
                              isDobPickerOpen
                                ? 'border-[var(--color-3d6b56)] text-[var(--color-3d6b56)] bg-emerald-50'
                                : 'border-gray-300 text-gray-500 bg-white hover:border-gray-400'
                            }`}
                          >
                            <FaCalendarAlt className="text-sm" />
                          </button>
                        </div>
                        <input
                          ref={dobInputRef}
                          type="date"
                          value={formData.applicantDob}
                          onChange={(event) => {
                            updateFormField('applicantDob', event.target.value);
                            setIsDobPickerOpen(false);
                          }}
                          onBlur={() => setIsDobPickerOpen(false)}
                          className="sr-only"
                          tabIndex={-1}
                          max={todayIso}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'correction-select' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Correction details</h2>
                <p className="text-sm text-gray-600 mb-5">Select every field that needs correction. You can include multiple fields and update each one in the next steps.</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {CORRECTION_FIELDS.map((field) => {
                    const selected = formData.correctionEntries.some((entry) => entry.field === field);
                    return (
                      <button
                        key={field}
                        type="button"
                        onClick={() => (selected ? removeCorrectionEntry(field) : addCorrectionEntry(field))}
                        className={`rounded-2xl border px-4 py-4 text-sm font-semibold text-left min-h-[92px] transition ${
                          selected ? 'border-[var(--color-3d6b56)] bg-emerald-50 text-[var(--color-3d6b56)]' : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <p className="text-base font-bold">{field}</p>
                        <p className="text-xs mt-1">{selected ? 'Selected • Click to remove' : 'Not selected • Click to include'}</p>
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mb-4">Selected fields: {formData.correctionEntries.length}</p>
              </div>
            )}

            {isCorrectionDetailStep(currentStep) && (
              <div>
                {(() => {
                  const field = getCorrectionFieldFromStep(currentStep);
                  const entry = formData.correctionEntries.find((item) => item.field === field);
                  if (!entry) {
                    return <p className="text-sm text-gray-600">Select correction fields first.</p>;
                  }

                  return (
                    <div className="rounded-2xl border border-gray-200 p-4">
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">Correction: {field}</h2>
                      <p className="text-sm text-gray-600 mb-5">Enter exactly what appears now and what it should be updated to. This helps avoid processing delays.</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Current value in certificate</label>
                          {field === 'DOB' ? (
                            <>
                              <div
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base inline-flex items-center justify-between gap-3 bg-white cursor-pointer"
                                onClick={() => {
                                  const pickerInput = correctionIncorrectDobInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null;
                                  if (!pickerInput) {
                                    return;
                                  }
                                  setIsCorrectionIncorrectDobPickerOpen(true);
                                  setIsCorrectionCorrectDobPickerOpen(false);
                                  correctionCorrectDobInputRef.current?.blur();
                                  pickerInput.focus();
                                  if (typeof pickerInput.showPicker === 'function') {
                                    pickerInput.showPicker();
                                  }
                                }}
                              >
                                <span className={entry.incorrectValue ? 'text-gray-900' : 'text-gray-500'}>
                                  {entry.incorrectValue ? formatDateLabel(entry.incorrectValue) : 'Select incorrect DOB'}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const pickerInput = correctionIncorrectDobInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null;
                                    if (!pickerInput) {
                                      return;
                                    }

                                    if (isCorrectionIncorrectDobPickerOpen) {
                                      pickerInput.blur();
                                      setIsCorrectionIncorrectDobPickerOpen(false);
                                      return;
                                    }

                                    setIsCorrectionIncorrectDobPickerOpen(true);
                                    setIsCorrectionCorrectDobPickerOpen(false);
                                    correctionCorrectDobInputRef.current?.blur();
                                    pickerInput.focus();
                                    if (typeof pickerInput.showPicker === 'function') {
                                      pickerInput.showPicker();
                                    }
                                  }}
                                  onMouseDown={(event) => event.preventDefault()}
                                  aria-label="Toggle incorrect DOB calendar"
                                  className={`inline-flex items-center justify-center h-8 w-8 rounded-full border transition ${
                                    isCorrectionIncorrectDobPickerOpen
                                      ? 'border-[var(--color-3d6b56)] text-[var(--color-3d6b56)] bg-emerald-50'
                                      : 'border-gray-300 text-gray-500 bg-white hover:border-gray-400'
                                  }`}
                                >
                                  <FaCalendarAlt className="text-sm" />
                                </button>
                              </div>
                              <input
                                ref={correctionIncorrectDobInputRef}
                                type="date"
                                value={entry.incorrectValue}
                                onChange={(event) => {
                                  updateCorrectionEntry(field, { incorrectValue: event.target.value });
                                  setIsCorrectionIncorrectDobPickerOpen(false);
                                }}
                                onBlur={() => setIsCorrectionIncorrectDobPickerOpen(false)}
                                className="sr-only"
                                tabIndex={-1}
                                max={todayIso}
                              />
                            </>
                          ) : (
                            <input
                              type="text"
                              value={entry.incorrectValue}
                              onChange={(event) => updateCorrectionEntry(field, { incorrectValue: event.target.value })}
                              className="w-full rounded-xl border border-gray-300 px-4 py-3"
                              placeholder={`Enter current ${field.toLowerCase()} exactly as printed`}
                            />
                          )}
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Correct value required</label>
                          {field === 'DOB' ? (
                            <>
                              <div
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base inline-flex items-center justify-between gap-3 bg-white cursor-pointer"
                                onClick={() => {
                                  const pickerInput = correctionCorrectDobInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null;
                                  if (!pickerInput) {
                                    return;
                                  }
                                  setIsCorrectionCorrectDobPickerOpen(true);
                                  setIsCorrectionIncorrectDobPickerOpen(false);
                                  correctionIncorrectDobInputRef.current?.blur();
                                  pickerInput.focus();
                                  if (typeof pickerInput.showPicker === 'function') {
                                    pickerInput.showPicker();
                                  }
                                }}
                              >
                                <span className={entry.correctValue ? 'text-gray-900' : 'text-gray-500'}>
                                  {entry.correctValue ? formatDateLabel(entry.correctValue) : 'Select correct DOB'}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const pickerInput = correctionCorrectDobInputRef.current as (HTMLInputElement & { showPicker?: () => void }) | null;
                                    if (!pickerInput) {
                                      return;
                                    }

                                    if (isCorrectionCorrectDobPickerOpen) {
                                      pickerInput.blur();
                                      setIsCorrectionCorrectDobPickerOpen(false);
                                      return;
                                    }

                                    setIsCorrectionCorrectDobPickerOpen(true);
                                    setIsCorrectionIncorrectDobPickerOpen(false);
                                    correctionIncorrectDobInputRef.current?.blur();
                                    pickerInput.focus();
                                    if (typeof pickerInput.showPicker === 'function') {
                                      pickerInput.showPicker();
                                    }
                                  }}
                                  onMouseDown={(event) => event.preventDefault()}
                                  aria-label="Toggle correct DOB calendar"
                                  className={`inline-flex items-center justify-center h-8 w-8 rounded-full border transition ${
                                    isCorrectionCorrectDobPickerOpen
                                      ? 'border-[var(--color-3d6b56)] text-[var(--color-3d6b56)] bg-emerald-50'
                                      : 'border-gray-300 text-gray-500 bg-white hover:border-gray-400'
                                  }`}
                                >
                                  <FaCalendarAlt className="text-sm" />
                                </button>
                              </div>
                              <input
                                ref={correctionCorrectDobInputRef}
                                type="date"
                                value={entry.correctValue}
                                onChange={(event) => {
                                  updateCorrectionEntry(field, { correctValue: event.target.value });
                                  setIsCorrectionCorrectDobPickerOpen(false);
                                }}
                                onBlur={() => setIsCorrectionCorrectDobPickerOpen(false)}
                                className="sr-only"
                                tabIndex={-1}
                                max={todayIso}
                              />
                            </>
                          ) : (
                            <input
                              type="text"
                              value={entry.correctValue}
                              onChange={(event) => updateCorrectionEntry(field, { correctValue: event.target.value })}
                              className="w-full rounded-xl border border-gray-300 px-4 py-3"
                              placeholder={`Correct ${field.toLowerCase()} required`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {currentStep === 'documents' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Available documents</h2>
                <p className="text-sm text-gray-600 mb-2">Select documents you can provide now so verification can start without delays.</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-5">You may continue even if only one document is available.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {DOCUMENT_OPTIONS.map((doc) => {
                    const checked = formData.documents.includes(doc);
                    return (
                      <label
                        key={doc}
                        className={`rounded-xl border p-3 text-left text-sm font-medium transition ${
                          checked ? 'border-[var(--color-3d6b56)] bg-emerald-50 text-[var(--color-1f4d3b)]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="mr-2 align-middle"
                          checked={checked}
                          onChange={() => toggleDocument(doc)}
                        />
                        <span className="align-middle">{doc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {currentStep === 'slot' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Choose appointment slot</h2>
                <p className="text-sm text-gray-600 mb-5">Choose a preferred date and time window. Availability updates live from our schedule.</p>

                {loadingSlots ? (
                  <p className="text-sm text-gray-600">Loading slots...</p>
                ) : (
                  <>
                    <div className="space-y-3 mb-5">
                      {slots.map((slot) => (
                        <button
                          key={slot.date}
                          type="button"
                          onClick={() => updateFormField('chosenThursday', slot.date)}
                          disabled={slot.isFull}
                          className={`w-full rounded-xl border p-4 text-left transition ${
                            formData.chosenThursday === slot.date
                              ? 'border-[var(--color-3d6b56)] bg-emerald-50'
                              : slot.isFull
                                ? 'border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed'
                                : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                            <p className="font-bold text-base sm:text-lg">{formatIndianDateTime(slot.date, slot.timeWindow || bookingFee?.appointmentWindow || 'Time will be shared')}</p>
                            <p className="text-sm mt-1">{slot.isFull ? 'Fully booked' : `${slot.remainingSlots} slot${slot.remainingSlots === 1 ? '' : 's'} left • ${slot.bookedCount}/${slot.maxSlots} booked`}</p>
                        </button>
                      ))}
                    </div>

                    {allSlotsFull && waitlistAllowed && (
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                        <p className="text-sm text-amber-800 font-semibold mb-3">All slots are currently full. Join the paid waitlist and our team will contact you.</p>
                        <button
                          type="button"
                          onClick={() => updateFormField('chosenThursday', 'WAITLIST')}
                          className={`rounded-lg px-4 py-2 text-sm font-semibold border transition ${
                            formData.chosenThursday === 'WAITLIST'
                              ? 'border-amber-600 bg-amber-100 text-amber-900'
                              : 'border-amber-300 bg-white text-amber-900'
                          }`}
                        >
                          Select WAITLIST
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {currentStep === 'contact' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Contact details</h2>
                <p className="text-sm text-gray-600 mb-5">We use these details for confirmations, payment receipts, and appointment updates.</p>

                <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.relation === 'self' ? (
                    <>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Applicant phone</label>
                        <input
                          type="tel"
                          value={formData.applicantPhone}
                          onChange={(event) => handleApplicantPhoneChange(event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="10-digit mobile number"
                          inputMode="numeric"
                          maxLength={10}
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Applicant email</label>
                        <input
                          type="email"
                          value={formData.applicantEmail}
                          onChange={(event) => updateFormField('applicantEmail', event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="example@email.com"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Filler phone</label>
                        <input
                          type="tel"
                          value={formData.fillerPhone}
                          onChange={(event) => handleFillerPhoneChange(event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="10-digit mobile number"
                          inputMode="numeric"
                          maxLength={10}
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Filler email</label>
                        <input
                          type="email"
                          value={formData.fillerEmail}
                          onChange={(event) => updateFormField('fillerEmail', event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="example@email.com"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {currentStep === 'review' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Review details</h2>
                <p className="text-sm text-gray-600 mb-5">Please review all details carefully before payment. Use the Edit actions to fix any mismatch immediately.</p>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-bold">Applicant</p>
                      <button type="button" onClick={() => jumpToStep('applicant')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit</button>
                    </div>
                    <p className="text-sm"><strong>Name:</strong> {formData.applicantName || '—'}</p>
                    <p className="text-sm"><strong>DOB:</strong> {formatDateLabel(formData.applicantDob)}</p>
                  </div>

                  {formData.relation === 'other' && (
                    <div className="rounded-2xl border border-gray-200 p-4">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <p className="font-bold">Filler & Relationship</p>
                        <button type="button" onClick={() => jumpToStep('filler')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit</button>
                      </div>
                      <p className="text-sm"><strong>Filler:</strong> {formData.fillerName || '—'}</p>
                      <p className="text-sm"><strong>Relationship:</strong> {formData.relationshipToApplicant === 'Other' ? formData.relationshipOther || 'Other' : formData.relationshipToApplicant}</p>
                    </div>
                  )}

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-bold">Application</p>
                      <button type="button" onClick={() => jumpToStep('application')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit</button>
                    </div>
                    <p className="text-sm"><strong>Type:</strong> {APPLICATION_OPTIONS.find((item) => item.value === formData.applicationType)?.label || formData.applicationType}</p>
                  </div>

                  {formData.applicationType === 'correction' && (
                    <div className="rounded-2xl border border-gray-200 p-4">
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <p className="font-bold">Correction details</p>
                        <button type="button" onClick={() => jumpToStep('correction-select')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit fields</button>
                      </div>
                      <div className="space-y-2">
                        {formData.correctionEntries.map((entry) => (
                          <div key={entry.field} className="rounded-xl border border-gray-100 bg-gray-50 p-3">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <p className="text-sm font-semibold">{entry.field}</p>
                              <button type="button" onClick={() => jumpToStep(`correction-${entry.field}`)} className="text-xs font-semibold text-[var(--color-3d6b56)]">Edit</button>
                            </div>
                            <p className="text-xs sm:text-sm"><strong>Incorrect:</strong> {entry.incorrectValue || '—'}</p>
                            <p className="text-xs sm:text-sm"><strong>Correct:</strong> {entry.correctValue || '—'}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-bold">Documents</p>
                      <button type="button" onClick={() => jumpToStep('documents')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit</button>
                    </div>
                    <p className="text-sm">{formData.documents.length ? formData.documents.join(', ') : '—'}</p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-bold">Slot</p>
                      <button type="button" onClick={() => jumpToStep('slot')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit</button>
                    </div>
                    <p className="text-sm">{formData.chosenThursday === 'WAITLIST' ? 'WAITLIST' : formatIndianDateTime(formData.chosenThursday, selectedTimeWindow)}</p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="font-bold">Contact</p>
                      <button type="button" onClick={() => jumpToStep('contact')} className="text-sm font-semibold text-[var(--color-3d6b56)]">Edit</button>
                    </div>
                    {formData.relation === 'self' ? (
                      <>
                        <p className="text-sm"><strong>Phone:</strong> {formData.applicantPhone || '—'}</p>
                        <p className="text-sm"><strong>Email:</strong> {formData.applicantEmail || '—'}</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm"><strong>Phone:</strong> {formData.fillerPhone || '—'}</p>
                        <p className="text-sm"><strong>Email:</strong> {formData.fillerEmail || '—'}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Secure payment</h2>
                <p className="text-sm text-gray-600 mb-5">Your booking is confirmed after successful payment verification.</p>

                <div className="rounded-2xl border border-gray-200 p-5 space-y-3">
                  <p className="text-sm text-gray-600">Selected Appointment</p>
                  <p className="text-lg font-bold">{formData.chosenThursday === 'WAITLIST' ? 'WAITLIST' : formatIndianDateTime(formData.chosenThursday, selectedTimeWindow)}</p>
                  <p className="text-sm text-gray-600">Time Window: {selectedTimeWindow}</p>
                  <p className="text-xl sm:text-2xl font-bold text-[var(--color-3d6b56)]">Booking Fee: ₹{bookingFee?.amount ?? '—'}</p>
                </div>

                <p className="mt-2 text-xs text-gray-500">By paying, you agree to our Terms & Conditions and Privacy Policy.</p>
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={processingPayment || !bookingFee}
                  className="mt-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-3d6b56)] px-6 py-3.5 text-white font-bold disabled:opacity-60"
                >
                  <FaLock /> {processingPayment ? 'Processing...' : 'Proceed to Secure Payment'}
                </button>
              </div>
            )}

            {currentStep === 'legal' && (
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Terms & Privacy consent</h2>
                <p className="text-sm text-gray-600 mb-5">Review the Terms and Privacy details, then confirm consent to proceed to secure payment.</p>

                <div className="rounded-2xl border border-gray-200 p-5 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setLegalPopup('terms')}
                      className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
                    >
                      View Terms & Conditions
                    </button>
                    <button
                      type="button"
                      onClick={() => setLegalPopup('privacy')}
                      className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
                    >
                      View Privacy Policy
                    </button>
                  </div>

                  <label className="block rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(event) => setTermsAccepted(event.target.checked)}
                      className="mr-2 align-middle"
                    />
                    <span className="align-middle">I have read and agree to the Terms & Conditions and Privacy Policy.</span>
                  </label>
                </div>
              </div>
            )}

            {legalPopup && (
              <div className="fixed inset-0 z-[130] bg-black/60 flex items-center justify-center p-4" role="dialog" aria-modal="true">
                <div className="w-full max-w-2xl rounded-2xl bg-white border border-gray-200 shadow-xl max-h-[85vh] overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base font-bold text-gray-900">{legalPopup === 'terms' ? 'Terms & Conditions' : 'Privacy Policy'}</p>
                    <button type="button" onClick={() => setLegalPopup(null)} className="text-gray-500 hover:text-gray-700" aria-label="Close legal popup">
                      <FaTimes />
                    </button>
                  </div>
                  <div className="px-4 py-4 overflow-y-auto max-h-[70vh] text-sm text-gray-700 space-y-3">
                    {legalPopup === 'terms' ? (
                      <>
                        <p><strong>Service Scope:</strong> Khan Consultants provides consultation and documentation support for birth certificate services.</p>
                        <p><strong>Applicant Data:</strong> You are responsible for providing accurate and complete details.</p>
                        <p><strong>Payments:</strong> Booking fee covers consultation and process support. External statutory charges may apply separately.</p>
                        <p><strong>Appointments:</strong> Appointment slots are assigned based on availability and operational constraints.</p>
                        <p><strong>Communication:</strong> Updates are shared using the phone and email submitted in this form.</p>
                      </>
                    ) : (
                      <>
                        <p><strong>Data Collection:</strong> We collect only the details needed for booking, payment verification, and service communication.</p>
                        <p><strong>Data Usage:</strong> Submitted data is used for application processing, slot management, and support responses.</p>
                        <p><strong>Data Sharing:</strong> Data is shared only with required operational systems (payment, notification, processing workflows).</p>
                        <p><strong>Data Protection:</strong> Reasonable safeguards are used to protect submitted personal information.</p>
                        <p><strong>Contact Responsibility:</strong> Please provide active contact details to avoid missed updates.</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'confirmation' && confirmation && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[var(--color-1f4d3b)]">Booking confirmed</h2>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
                  <p className="inline-flex items-center gap-2 text-emerald-800 font-semibold mb-3"><FaCheckCircle /> Payment verified successfully</p>
                  <p className="text-sm sm:text-base mb-1"><strong>Appointment Date:</strong> {formatDateLabel(confirmation.appointmentDate)}</p>
                  <p className="text-sm sm:text-base mb-1"><strong>Time Window:</strong> {confirmation.appointmentWindow}</p>
                  <p className="text-sm sm:text-base mb-1"><strong>Payment Reference:</strong> {confirmation.paymentReference}</p>
                  <p className="text-sm sm:text-base"><strong>Booking Reference:</strong> {confirmation.bookingReference}</p>
                </div>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={startAnotherBooking}
                    className="inline-flex items-center justify-center rounded-xl bg-[var(--color-3d6b56)] px-5 py-3 text-sm sm:text-base font-bold text-white"
                  >
                    Book for another person
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-5 py-3 text-sm sm:text-base font-semibold text-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {(currentStep === 'legal' || currentStep === 'payment') && (
              <div className="mt-5 grid grid-cols-2 gap-2 sm:max-w-md">
                <div title="Secure" aria-label="Secure" className="px-2.5 py-2 inline-flex items-center justify-center gap-1.5 text-gray-700 text-[11px] sm:text-xs font-semibold"><FaLock className="text-sm text-emerald-600" /> Secure</div>
                <div title="Licensed KMC Consultant" aria-label="Licensed KMC Consultant" className="px-2 py-2 inline-flex items-center justify-center gap-1 text-gray-700 text-[10px] sm:text-xs font-semibold whitespace-nowrap"><FaIdBadge className="text-sm shrink-0 text-green-600" /> Licensed KMC Consultant</div>
              </div>
            )}

            {currentStep !== 'confirmation' && currentStep !== 'relation' && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-gray-700"
              >
                <FaWhatsapp className="text-emerald-600" />
                <span>Need assistance with this step? Chat on WhatsApp</span>
              </a>
            )}
          </div>
        </div>

        {currentStep !== 'confirmation' && (
          <div className="border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 bg-white">
            <div className="max-w-4xl mx-auto pb-[max(env(safe-area-inset-bottom),0px)]">
              <div className="flex items-center justify-center">
                <div className="w-full sm:w-auto flex flex-col sm:items-center gap-1.5">
                  {currentStep !== 'payment' && currentStep !== 'relation' && currentStep !== 'application' && (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canContinue || processingPayment}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-3d6b56)] px-8 py-3.5 text-base sm:text-lg font-bold text-white disabled:opacity-40 disabled:cursor-not-allowed w-full sm:min-w-[320px] sm:w-auto"
                    >
                      Continue <FaArrowRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
