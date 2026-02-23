const ALLOWED_ACTIONS = new Set(['getSlots', 'getBookingFee', 'createOrder', 'verifyPaymentAndSave']);

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    Vary: 'Origin',
  };
}

export async function handler(event) {
  const headers = corsHeaders();

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, data: null, error: 'Method not allowed' }),
    };
  }

  const scriptUrl = process.env.NETLIFY_BOOKING_SCRIPT_URL;
  if (!scriptUrl) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, data: null, error: 'Server is not configured' }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, data: null, error: 'Invalid JSON payload' }),
    };
  }

  const action = String(payload.action || '').trim();
  if (!ALLOWED_ACTIONS.has(action)) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ success: false, data: null, error: 'Invalid action' }),
    };
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text();

    return {
      statusCode: upstream.ok ? 200 : upstream.status,
      headers: {
        ...headers,
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: text,
    };
  } catch {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({ success: false, data: null, error: 'Upstream request failed' }),
    };
  }
}
