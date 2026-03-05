# COPILOT_CONTEXT

## Executive Summary
This project is a React + TypeScript + Tailwind website for Khan Consultants with:
- Marketing and service-detail pages
- Lead/contact submission via backend API
- A production-grade Birth Certificate booking + Razorpay payment flow via backend
- Deployment with SPA routing and SEO hardening

## What Was Built / Decided

### UI/UX Work
- Service pages received iterative mobile-first UI improvements.
- Contact/About pages were aligned closer to service page style language.
- Hero fit and section spacing have been repeatedly tuned to reduce odd whitespace.

### Routing and SEO
- Clean path routing (no hash URLs).
- Canonical host redirects implemented:
  - http -> https
  - www -> apex
- Added /home -> / redirect for legacy crawls.
- Added /_preview/* hard handling + robots disallow to reduce crawl noise.
- Added dedicated /404 route and page with noindex behavior.
- Dynamic SEO manager updates title/meta/OG/Twitter/schema per route.

### Booking/Payment System
- Modal wizard implemented for birth certificate booking.
- Typed API client and response models added.
- Backend integration supports actions:
  - getSlots
  - getBookingFee
  - createOrder
  - verifyPaymentAndSave
- Security decisions in backend include:
  - signature verification
  - payment capture and amount verification
  - lock-based slot write
  - idempotency by payment ID
  - strict payload validation
  - waitlist enforcement
  - email confirmation

### CORS and Production Safety
- Frontend is backend-managed for contact, enquiry, and booking APIs.
- Backend CORS policy is controlled by `CORS_ORIGIN`.

## Fresh Start Guide (New Session)
1) Read .github/copilot-instructions.md first.
2) Verify env config:
  - frontend: VITE_BACKEND_URL plus endpoint vars
  - backend: DATABASE_URL, CORS_ORIGIN, ADMIN_PASSWORD
3) Validate build: npm run build
4) For booking changes, inspect these first:
   - src/components/BirthCertificateBookingModal.tsx
   - src/api/birthBookingApi.ts
   - src/types/birthBooking.ts
  - backend/src/routes/birth.ts
  - backend/src/services/birthAction.ts
5) For SEO/routing changes, inspect:
   - src/components/SeoManager.tsx
   - src/App.tsx
   - public/sitemap.xml
   - public/robots.txt
   - netlify.toml

## Red Flags and Prior Breakages
1) Backend CORS origin mismatch
- Symptom: browser requests are blocked by CORS policy
- Fix: ensure exact frontend origin is listed in `CORS_ORIGIN`

2) Search Console reporting /home and host variants
- Symptom: redirect/404 indexing noise
- Fix: canonical redirects + /home -> / + sitemap/robots cleanup + 404 strategy

3) Soft-404 risk from wildcard redirect to /
- Symptom: unknown pages indexed incorrectly
- Fix: client route to /404 and noindex metadata handling

4) Over-editing large pages can regress layout
- Fix: perform small scoped edits and build-check after each pass

## Current Operational Status
- Backend APIs are used for contact, enquiry, and booking flows.
- Build currently passes.

## Suggested Immediate Next Improvements
- Implement real content for ImportExport and VisasImmigration pages.
- Add lightweight test coverage for booking API mapping and route SEO metadata.
- Introduce a shared hero/layout utility to reduce repeated manual spacing fixes.
