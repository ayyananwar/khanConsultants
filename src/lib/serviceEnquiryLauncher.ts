import type { ServiceType } from '../types/serviceEnquiry';

export const SERVICE_ENQUIRY_OPEN_EVENT = 'service-enquiry:open';

export interface ServiceEnquiryOpenDetail {
  serviceType?: ServiceType;
}

export function openServiceEnquiry(detail: ServiceEnquiryOpenDetail = {}): void {
  window.dispatchEvent(new CustomEvent<ServiceEnquiryOpenDetail>(SERVICE_ENQUIRY_OPEN_EVENT, { detail }));
}
