import type {
  BookingFeeResponse,
  BookingFormData,
  CreateOrderResponse,
  SlotOption,
  VerifyPaymentResponse,
} from '../types/birthBooking';

const BACKEND_BASE_URL = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '');

function resolveBookingApiUrl(): string {
  const configured = String(import.meta.env.VITE_BOOKING_API_URL || '').trim();

  // Migrate old Netlify proxy path to direct backend route.
  if (!configured || configured === '/api/booking') {
    return `${BACKEND_BASE_URL}/api/v1/birth/action`;
  }

  if (configured.startsWith('http://') || configured.startsWith('https://')) {
    return configured;
  }

  const normalizedPath = configured.startsWith('/') ? configured : `/${configured}`;
  return `${BACKEND_BASE_URL}${normalizedPath}`;
}

const BOOKING_API_URL = resolveBookingApiUrl();

interface ApiEnvelope<T> {
  success: boolean;
  data?: T;
  error?: string;
}

interface GetSlotsResponse {
  slots: SlotOption[];
  allFull: boolean;
  waitlistAllowed: boolean;
}

interface CreateOrderPayload {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
}

interface VerifyPaymentPayload {
  formData: BookingFormData;
  razorpayPaymentId: string;
  razorpayOrderId: string;
  razorpaySignature: string;
}

async function postAction<TResponse, TPayload = Record<string, unknown>>(
  action: string,
  payload: TPayload,
): Promise<TResponse> {
  if (!BOOKING_API_URL) {
    throw new Error('VITE_BOOKING_API_URL is not configured');
  }

  const response = await fetch(BOOKING_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    body: JSON.stringify({ action, ...payload }),
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  const json = (await response.json()) as ApiEnvelope<TResponse>;

  if (!json.success || !json.data) {
    throw new Error(json.error || 'Unexpected API response');
  }

  return json.data;
}

export async function getAvailableSlots(): Promise<GetSlotsResponse> {
  return postAction<GetSlotsResponse>('getSlots', {});
}

export async function getBookingFee(): Promise<BookingFeeResponse> {
  return postAction<BookingFeeResponse>('getBookingFee', {});
}

export async function createRazorpayOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
  return postAction<CreateOrderResponse, CreateOrderPayload>('createOrder', payload);
}

export async function verifyPaymentAndSave(payload: VerifyPaymentPayload): Promise<VerifyPaymentResponse> {
  return postAction<VerifyPaymentResponse, VerifyPaymentPayload>('verifyPaymentAndSave', payload);
}
