import { useEffect, useMemo, useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaLock } from 'react-icons/fa';
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
  'Other',
];

const STEP_KEYS = ['relation', 'application', 'applicant', 'correction', 'documents', 'slot', 'payment', 'confirmation'] as const;
const CORRECTION_STEP_KEYS = ['relation', 'application', 'correction', 'applicant', 'documents', 'slot', 'payment', 'confirmation'] as const;

const initialFormData: BookingFormData = {
  relation: 'self',
  fillerName: '',
  fillerPhone: '',
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

function splitOtherDocuments(value: string): string[] {
  return value
    .split('|')
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseOtherDocumentInput(value: string): string[] {
  return value
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
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
  const [otherDocumentInput, setOtherDocumentInput] = useState('');
  const [phoneFieldErrors, setPhoneFieldErrors] = useState<{ fillerPhone?: string; applicantPhone?: string }>({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [dobInputType, setDobInputType] = useState<'text' | 'date'>('text');

  const activeSteps = useMemo(() => {
    if (formData.applicationType === 'correction') {
      return CORRECTION_STEP_KEYS;
    }
    return STEP_KEYS.filter((step) => step !== 'correction');
  }, [formData.applicationType]);

  const currentStep = activeSteps[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / activeSteps.length) * 100);
  const todayIso = new Date().toISOString().split('T')[0];
  const otherDocuments = useMemo(() => splitOtherDocuments(formData.documentsOther), [formData.documentsOther]);

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
    setOtherDocumentInput('');
    setPhoneFieldErrors({});
    setTermsAccepted(false);
    setDobInputType('text');
  }, [isOpen]);

  useEffect(() => {
    if (formData.applicantDob) {
      setDobInputType('date');
      return;
    }
    setDobInputType('text');
  }, [formData.applicantDob]);

  useEffect(() => {
    if (currentStep !== 'correction') {
      return;
    }

    setFormData((prev) => {
      if (prev.correctionEntries.length > 0) {
        return prev;
      }
      return {
        ...prev,
        correctionEntries: [{ field: 'Name', incorrectValue: '', correctValue: '' }],
      };
    });
  }, [currentStep]);

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
          setErrorMessage(error instanceof Error ? error.message : 'Failed to load booking details');
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
    setPhoneFieldErrors((prev) => ({
      ...prev,
      fillerPhone: normalized.length === 0 || normalized.length === 10 ? '' : 'Phone number must be exactly 10 digits',
    }));
  };

  const handleApplicantPhoneChange = (value: string) => {
    const normalized = normalizePhone(value);
    updateFormField('applicantPhone', normalized);
    setPhoneFieldErrors((prev) => ({
      ...prev,
      applicantPhone: normalized.length === 0 || normalized.length === 10 ? '' : 'Phone number must be exactly 10 digits',
    }));
  };

  const addOtherDocument = () => {
    const parsedValues = parseOtherDocumentInput(otherDocumentInput);
    if (parsedValues.length === 0) {
      return;
    }

    const existingSet = new Set(otherDocuments.map((item) => item.toLowerCase()));
    const nextDocuments = [...otherDocuments];

    parsedValues.forEach((item) => {
      const key = item.toLowerCase();
      if (!existingSet.has(key)) {
        nextDocuments.push(item);
        existingSet.add(key);
      }
    });

    updateFormField('documentsOther', nextDocuments.join('|'));
    setOtherDocumentInput('');
  };

  const removeOtherDocument = (indexToRemove: number) => {
    const nextDocuments = otherDocuments.filter((_, index) => index !== indexToRemove);
    updateFormField('documentsOther', nextDocuments.join('|'));
  };

  const validateCurrentStep = () => {
    if (currentStep === 'relation') {
      return true;
    }

    if (currentStep === 'application') {
      if (formData.applicationType === 'other' && !formData.applicationTypeOther.trim()) {
        setErrorMessage('Please enter your application type.');
        return false;
      }
      return true;
    }

    if (currentStep === 'applicant') {
      if (formData.relation === 'other' && (!formData.fillerName.trim() || !formData.fillerPhone.trim())) {
        setErrorMessage('Please enter your name and phone number.');
        return false;
      }
      if (formData.relation === 'other') {
        const fillerDigitsOnly = formData.fillerPhone.replace(/\D/g, '');
        if (fillerDigitsOnly.length !== 10) {
          setPhoneFieldErrors((prev) => ({ ...prev, fillerPhone: 'Phone number must be exactly 10 digits' }));
          setErrorMessage('Filler phone number must be exactly 10 digits.');
          return false;
        }
      }
      if (!formData.applicantName.trim() || !formData.applicantDob || !formData.applicantPhone.trim() || !formData.applicantEmail.trim()) {
        setErrorMessage('Please complete all applicant details.');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.applicantEmail)) {
        setErrorMessage('Please enter a valid email address.');
        return false;
      }
      const digitsOnly = formData.applicantPhone.replace(/\D/g, '');
      if (digitsOnly.length !== 10) {
        setPhoneFieldErrors((prev) => ({ ...prev, applicantPhone: 'Phone number must be exactly 10 digits' }));
        setErrorMessage('Applicant phone number must be exactly 10 digits.');
        return false;
      }
      return true;
    }

    if (currentStep === 'correction') {
      if (formData.correctionEntries.length === 0) {
        setErrorMessage('Please add at least one correction item.');
        return false;
      }
      const hasInvalidEntry = formData.correctionEntries.some(
        (entry) => !entry.incorrectValue.trim() || !entry.correctValue.trim(),
      );
      if (hasInvalidEntry) {
        setErrorMessage('Please fill incorrect and correct values for each correction field.');
        return false;
      }
      return true;
    }

    if (currentStep === 'documents') {
      if (formData.documents.length === 0) {
        setErrorMessage('Select at least one document.');
        return false;
      }
      if (formData.documents.includes('Other') && otherDocuments.length === 0) {
        setErrorMessage('Please add at least one other document.');
        return false;
      }
      return true;
    }

    if (currentStep === 'slot') {
      if (!formData.chosenThursday) {
        setErrorMessage('Please choose a slot to continue.');
        return false;
      }
      return true;
    }

    if (currentStep === 'payment') {
      if (!termsAccepted) {
        setErrorMessage('Please accept the Terms & Conditions and Privacy Policy to continue.');
        return false;
      }
      return Boolean(bookingFee);
    }

    return true;
  };

  const goNext = () => {
    if (!validateCurrentStep()) {
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
      return {
        ...prev,
        documents: nextDocs,
        documentsOther: doc === 'Other' && exists ? '' : prev.documentsOther,
      };
    });
  };

  const addCorrectionEntry = (field: CorrectionField) => {
    setFormData((prev) => {
      if (prev.correctionEntries.some((entry) => entry.field === field)) {
        return prev;
      }
      return {
        ...prev,
        correctionEntries: [...prev.correctionEntries, { field, incorrectValue: '', correctValue: '' }],
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
      setErrorMessage('Booking fee is unavailable. Please refresh and try again.');
      return;
    }

    if (!validateCurrentStep()) {
      return;
    }

    try {
      setProcessingPayment(true);
      setErrorMessage('');
      await loadRazorpayScript();

      const order = await createRazorpayOrder({
        applicantName: formData.applicantName,
        applicantEmail: formData.applicantEmail,
        applicantPhone: formData.applicantPhone,
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
          name: formData.applicantName,
          email: formData.applicantEmail,
          contact: formData.applicantPhone,
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
              formData,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
            });

            setConfirmation({
              appointmentDate: verifyResult.chosenThursday,
              appointmentWindow: verifyResult.appointmentWindow || bookingFee.appointmentWindow,
              paymentReference: verifyResult.paymentId,
              bookingReference: verifyResult.bookingReference,
            });

            setStepIndex(activeSteps.length - 1);
          } catch (error) {
            setErrorMessage(error instanceof Error ? error.message : 'Payment verification failed. Please retry.');
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

    setConfirmation(null);
    setErrorMessage('');
    setStepIndex(0);
    setPhoneFieldErrors({});
    setOtherDocumentInput('');
    setTermsAccepted(false);
    setFormData(
      getInitialFormData({
        relation: preservedRelation,
        fillerName: preservedFillerName,
        fillerPhone: preservedFillerPhone,
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
      setErrorMessage(error instanceof Error ? error.message : 'Failed to refresh booking details');
    } finally {
      setLoadingSlots(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] bg-black/70 backdrop-blur-sm">
      <div className="h-full w-full bg-white text-gray-900 flex flex-col">
        <div className="border-b border-gray-200 px-4 sm:px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-gray-700 hover:text-gray-900"
            >
              <FaArrowLeft /> Close
            </button>
            <p className="text-xs sm:text-sm font-semibold text-gray-600">Birth Certificate Booking</p>
            <div className="w-16" />
          </div>
          <div className="max-w-4xl mx-auto mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full bg-[var(--color-3d6b56)] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-5 pb-24 sm:pb-8 sm:pt-8">
          <div className="max-w-4xl mx-auto">
            {errorMessage && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{errorMessage}</div>
            )}

            {currentStep === 'relation' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Is it for yourself?</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Choose who this application is for.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'Yes', value: 'self' },
                    { label: 'No', value: 'other' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateFormField('relation', option.value as BookingFormData['relation'])}
                      className={`rounded-2xl border p-5 text-left transition ${
                        formData.relation === option.value ? 'border-[var(--color-3d6b56)] bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="text-lg font-bold">{option.label}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'application' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">What type of application is this?</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Select one option to continue.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'New', value: 'new' },
                    { label: 'Correction', value: 'correction' },
                    { label: 'Digital', value: 'digital' },
                    { label: 'Other', value: 'other' },
                  ].map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => updateFormField('applicationType', item.value as ApplicationType)}
                      className={`rounded-2xl border p-5 text-left transition ${
                        formData.applicationType === item.value ? 'border-[var(--color-3d6b56)] bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <p className="text-lg font-bold">{item.label}</p>
                    </button>
                  ))}
                </div>
                {formData.applicationType === 'other' && (
                  <div className="mt-5">
                    <label className="block text-sm font-semibold mb-2">Enter your application type</label>
                    <input
                      type="text"
                      value={formData.applicationTypeOther}
                      onChange={(event) => updateFormField('applicationTypeOther', event.target.value)}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                      placeholder="Example: Name Inclusion"
                    />
                  </div>
                )}
              </div>
            )}

            {currentStep === 'applicant' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Applicant details</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Fill details exactly as official documents. All fields are visible below for mobile users.</p>

                <div className="grid grid-cols-1 gap-4 sm:gap-5">
                  {formData.relation === 'other' && (
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 sm:p-5">
                      <p className="text-sm sm:text-base font-bold text-[var(--color-1f4d3b)] mb-3">Filler details (you)</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Your full name</label>
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
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Your phone number</label>
                          <input
                            type="tel"
                            value={formData.fillerPhone}
                            onChange={(event) => handleFillerPhoneChange(event.target.value)}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                            placeholder="10-digit mobile number"
                            autoComplete="tel"
                            inputMode="numeric"
                            pattern="[0-9]{10}"
                            maxLength={10}
                          />
                          {phoneFieldErrors.fillerPhone && (
                            <p className="mt-1 text-xs text-red-600">{phoneFieldErrors.fillerPhone}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

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
                        <input
                          type={dobInputType}
                          value={formData.applicantDob}
                          onChange={(event) => updateFormField('applicantDob', event.target.value)}
                          onFocus={() => setDobInputType('date')}
                          onClick={() => setDobInputType('date')}
                          onBlur={() => {
                            if (!formData.applicantDob) {
                              setDobInputType('text');
                            }
                          }}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="Select date of birth"
                          max={todayIso}
                        />
                        <p className="text-[11px] sm:text-xs text-gray-500 mt-1">Tap to open date picker.</p>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Applicant phone number</label>
                        <input
                          type="tel"
                          value={formData.applicantPhone}
                          onChange={(event) => handleApplicantPhoneChange(event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="10-digit mobile number"
                          autoComplete="tel"
                          inputMode="numeric"
                          pattern="[0-9]{10}"
                          maxLength={10}
                        />
                        {phoneFieldErrors.applicantPhone && (
                          <p className="mt-1 text-xs text-red-600">{phoneFieldErrors.applicantPhone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Applicant email</label>
                        <input
                          type="email"
                          value={formData.applicantEmail}
                          onChange={(event) => updateFormField('applicantEmail', event.target.value)}
                          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm sm:text-base"
                          placeholder="example@email.com"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 'correction' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Correction details</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Choose what needs correction, then fill the current and updated values.</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {(['Name', 'DOB', 'Other'] as CorrectionField[]).map((field) => {
                    const selected = formData.correctionEntries.some((entry) => entry.field === field);
                    return (
                      <button
                        key={field}
                        type="button"
                        onClick={() => (selected ? removeCorrectionEntry(field) : addCorrectionEntry(field))}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                          selected ? 'border-[var(--color-3d6b56)] bg-emerald-50 text-[var(--color-3d6b56)]' : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {selected ? `✓ ${field}` : `+ ${field}`}
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mb-4">Selected: {formData.correctionEntries.length} field(s). Tip: start with Name if unsure.</p>

                <div className="space-y-4">
                  {formData.correctionEntries.map((entry) => (
                    <div key={entry.field} className="rounded-2xl border border-gray-200 p-4">
                      <p className="font-bold mb-3">{entry.field}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Incorrect value</label>
                          <input
                            type="text"
                            value={entry.incorrectValue}
                            onChange={(event) => updateCorrectionEntry(entry.field, { incorrectValue: event.target.value })}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3"
                            placeholder={`Current ${entry.field.toLowerCase()} in certificate`}
                          />
                        </div>
                        <div>
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">Correct value</label>
                          <input
                            type="text"
                            value={entry.correctValue}
                            onChange={(event) => updateCorrectionEntry(entry.field, { correctValue: event.target.value })}
                            className="w-full rounded-xl border border-gray-300 px-4 py-3"
                            placeholder={`Correct ${entry.field.toLowerCase()} you need`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'documents' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Documents available</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Select all documents currently available with you.</p>

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

                {formData.documents.includes('Other') && (
                  <div className="mt-5">
                    <label className="block text-sm font-semibold mb-2">Other document(s)</label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={otherDocumentInput}
                        onChange={(event) => setOtherDocumentInput(event.target.value)}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3"
                        placeholder="Type one or many (comma separated), then Add"
                        onKeyDown={(event) => {
                          if (event.key === 'Enter') {
                            event.preventDefault();
                            addOtherDocument();
                          }
                        }}
                      />
                      <button
                        type="button"
                        onClick={addOtherDocument}
                        className="rounded-xl border border-[var(--color-3d6b56)] text-[var(--color-1f4d3b)] px-4 py-3 font-semibold"
                      >
                        Add document(s)
                      </button>
                    </div>
                    {otherDocuments.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {otherDocuments.map((item, index) => (
                          <button
                            key={`${item}-${index}`}
                            type="button"
                            onClick={() => removeOtherDocument(index)}
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs sm:text-sm text-[var(--color-1f4d3b)]"
                            title="Remove document"
                          >
                            {item} <span className="font-bold">×</span>
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-xs text-gray-500">You can paste multiple items like: Aadhaar, School ID, Hospital Slip.</p>
                  </div>
                )}
              </div>
            )}

            {currentStep === 'slot' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Choose your slot</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Only upcoming Thursdays are available for booking.</p>

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
                          <p className="font-bold text-base sm:text-lg">{slot.label || formatDateLabel(slot.date)}</p>
                          <p className="text-sm mt-1">{slot.isFull ? 'Fully booked' : `${slot.remainingSlots} slots left`}</p>
                        </button>
                      ))}
                    </div>

                    {allSlotsFull && waitlistAllowed && (
                      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                        <p className="text-sm text-amber-800 font-semibold mb-3">All slots are booked — join paid waitlist and our team will contact you.</p>
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

            {currentStep === 'payment' && (
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Confirm and pay</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Payment is required to lock your booking request.</p>

                <div className="rounded-2xl border border-gray-200 p-5 space-y-3">
                  <p className="text-sm text-gray-600">Selected Appointment</p>
                  <p className="text-lg font-bold">{formatDateLabel(formData.chosenThursday)}</p>
                  <p className="text-sm text-gray-600">Time Window: {bookingFee?.appointmentWindow || 'Will be shared on confirmation'}</p>
                  <p className="text-xl sm:text-2xl font-bold text-[var(--color-3d6b56)]">Booking Fee: ₹{bookingFee?.amount ?? '—'}</p>

                  <label className="mt-2 block rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(event) => setTermsAccepted(event.target.checked)}
                      className="mr-2 align-middle"
                    />
                    <span className="align-middle">
                      I agree to the{' '}
                      <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-3d6b56)] underline">
                        Terms & Conditions
                      </a>{' '}
                      and{' '}
                      <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--color-3d6b56)] underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <p className="mt-2 text-xs text-gray-500">By paying, you agree to our Terms & Conditions and Privacy Policy.</p>
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={processingPayment || !bookingFee}
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[var(--color-3d6b56)] px-6 py-3.5 text-white font-bold disabled:opacity-60"
                >
                  <FaLock /> {processingPayment ? 'Processing...' : 'Pay with Razorpay'}
                </button>
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
          </div>
        </div>

        {currentStep !== 'confirmation' && (
          <div className="border-t border-gray-200 px-4 sm:px-6 py-3 sm:py-4 bg-white">
            <div className="max-w-4xl mx-auto flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-4 pb-[max(env(safe-area-inset-bottom),0px)]">
              <button
                type="button"
                onClick={goBack}
                disabled={stepIndex === 0 || processingPayment}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-4 py-2.5 text-sm sm:text-base font-semibold text-gray-700 disabled:opacity-40 w-full sm:w-auto"
              >
                <FaArrowLeft /> Back
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={currentStep === 'payment' || processingPayment}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-3d6b56)] px-5 py-2.5 text-sm sm:text-base font-bold text-white disabled:opacity-40 w-full sm:w-auto"
              >
                Continue <FaArrowRight />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
