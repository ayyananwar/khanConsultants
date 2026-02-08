# Google Apps Script Integration Setup

## Overview
Your Contact form is now set up to submit data to Google Apps Script. Follow these steps to complete the integration.

## Step 1: Get Your Google Apps Script URL
- You already have your Web App URL from the Google Apps Script deployment
- It should look like: `https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec`

## Step 2: Update Contact.tsx
Open `src/pages/Contact.tsx` and find this line (around line 15):

```typescript
const SCRIPT_URL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";
```

Replace `"PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE"` with your actual Google Apps Script URL:

```typescript
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzMVlb0hRhjW2snEFKAEgg9-IYwX_ca2mXMQOEAPPwzJYZq6T5t7b1dpdanOr8OpXky/exec";
```

## Form Fields Sent to Google Apps Script
The form sends the following data:
- `name` - Full name (required)
- `email` - Email address (required)
- `phone` - Phone number (required)
- `company` - Company name (optional)
- `serviceInterest` - Selected service (optional)
- `message` - Message text (optional)

## Features Implemented

### State Management
- Uses React `useState` for all form fields
- Separate states for loading, success, and error messages

### Validation
- **Name**: Required field
- **Email**: Required + basic email format validation
- **Phone**: Required field
- All validation happens before submission

### Form Submission
- Uses FormData API for CORS compatibility with Google Apps Script
- Proper error handling with try/catch
- Handles network errors gracefully

### User Feedback
- **Loading State**: Button shows "Submitting..." and is disabled while sending
- **Success**: Green message displayed, form cleared after successful submission
- **Error**: Red message displayed if submission fails
- **Auto-clear**: Messages disappear when user starts typing

## Google Apps Script Requirements
Your Google Apps Script should:
1. Accept POST requests with form data
2. Have CORS enabled (Google Scripts handle this automatically)
3. Return any response (the form treats successful fetch as success due to opaque response)

## Styling
- Dark theme with slate-900 primary color
- Green success messages with border and background
- Red error messages with border and background
- Responsive design for mobile and desktop
- Disabled button shows visual feedback (darker shade)

## Testing the Form
1. Replace the SCRIPT_URL with your actual URL
2. Fill out the form with valid data
3. Click "Send Message"
4. You should see "Submitting..." on the button
5. After a few seconds, you should see the success message
6. The form should clear automatically

## Troubleshooting

### Form not submitting?
- Check that the SCRIPT_URL is correct
- Open browser DevTools (F12) → Console tab
- Look for any error messages
- Make sure your Google Apps Script is deployed as a Web App

### CORS errors?
- This is expected! Google Apps Script returns an opaque response
- The form treats this as success (data was received)
- Check your Google Apps Script email/sheet to confirm data arrival

### Need to update field names?
- Find all the `formData.append()` calls in the handleSubmit function
- Make sure the field names match what your Google Apps Script expects
