export type ApplicantRelation = 'self' | 'other';

export type ApplicationType = 'new' | 'correction' | 'digital' | 'other';

export type CorrectionField = 'Name' | 'DOB' | 'Address' | 'Other';

export type RelationshipToApplicant =
  | 'Father'
  | 'Mother'
  | 'Spouse'
  | 'Guardian'
  | 'Sibling'
  | 'Child'
  | 'Other';

export interface CorrectionEntry {
  field: CorrectionField;
  incorrectValue: string;
  correctValue: string;
}

export interface SlotOption {
  date: string;
  label: string;
  timeWindow?: string;
  maxSlots: number;
  bookedCount: number;
  remainingSlots: number;
  isFull: boolean;
}

export interface BookingFormData {
  relation: ApplicantRelation;
  fillerName: string;
  fillerEmail: string;
  fillerPhone: string;
  relationshipToApplicant: RelationshipToApplicant;
  relationshipOther: string;
  applicationType: ApplicationType;
  applicationTypeOther: string;
  applicantName: string;
  applicantDob: string;
  applicantPhone: string;
  applicantEmail: string;
  correctionEntries: CorrectionEntry[];
  documents: string[];
  documentsOther: string;
  chosenThursday: string;
}

export interface BookingFeeResponse {
  amount: number;
  currency: string;
  appointmentWindow: string;
}

export interface CreateOrderResponse {
  orderId: string;
  amountSubunits: number;
  amountRupees: number;
  currency: string;
  keyId: string;
}

export interface VerifyPaymentResponse {
  bookingReference: string;
  chosenThursday: string;
  appointmentWindow: string;
  paymentId: string;
}

export interface BookingConfirmationData {
  appointmentDate: string;
  appointmentWindow: string;
  paymentReference: string;
  bookingReference: string;
}
