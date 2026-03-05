interface ContactEnquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  serviceType?: string;
  preferredContact?: string;
}

interface ContactEnquiryResult {
  contactReference: string;
  message: string;
}

interface ApiEnvelope<T> {
  success: boolean;
  data?: T;
  error?: string;
  issues?: Array<{
    path?: Array<string | number>;
    message?: string;
  }>;
}

function humanizeFieldName(field: string): string {
  return field
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^./, (ch) => ch.toUpperCase());
}

async function extractApiError(response: Response): Promise<string> {
  try {
    const payload = (await response.json()) as ApiEnvelope<unknown>;

    if (Array.isArray(payload.issues) && payload.issues.length > 0) {
      const lines = payload.issues.slice(0, 3).map((issue) => {
        const firstPath = issue.path?.[0];
        const field = typeof firstPath === 'string' ? humanizeFieldName(firstPath) : 'Field';
        const message = String(issue.message || 'Invalid value').trim();
        return `${field}: ${message}`;
      });

      return lines.join(' | ');
    }

    if (payload.error) {
      return payload.error;
    }
  } catch {
    // Fall through to generic message.
  }

  return `Request failed (${response.status})`;
}

const BACKEND_BASE_URL = (import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000').replace(/\/$/, '');
const CONTACT_ENQUIRY_API_URL = import.meta.env.VITE_CONTACT_ENQUIRY_API_URL || `${BACKEND_BASE_URL}/api/v1/contact/submit`;

export async function submitContactEnquiry(payload: ContactEnquiryPayload): Promise<ContactEnquiryResult> {
  const response = await fetch(CONTACT_ENQUIRY_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await extractApiError(response));
  }

  const json = (await response.json()) as ApiEnvelope<ContactEnquiryResult>;

  if (!json.success || !json.data) {
    throw new Error(json.error || 'Unexpected API response');
  }

  return json.data;
}