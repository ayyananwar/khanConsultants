export type ServiceType =
  | 'gst'
  | 'fssai'
  | 'drug-licence'
  | 'kmc'
  | 'personal-documentation'
  | 'trademark-marketplace';

export interface ServiceEnquiryPayload {
  serviceType: ServiceType;
  subServiceType?: string;
  fullName: string;
  designation?: string;
  officialBusinessName: string;
  phone: string;
  email: string;
  alternateNumber?: string;
  businessAddress: string;
  preferredCommunication: 'WhatsApp' | 'Phone call' | 'Email';
  additionalNotes: string;
  consentAccepted: true;
  data: Record<string, unknown>;
}

export interface ServiceEnquirySubmissionResult {
  enquiryReference: string;
  message: string;
}
