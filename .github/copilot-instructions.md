# Copilot Instructions — Khan Consultants

## Project Purpose
Khan Consultants is a production website for a Kolkata consulting business. It combines marketing pages, service-detail pages, lead/contact capture, and a backendless Birth Certificate booking + payment flow.

## Goals
- Convert visitors into leads and bookings.
- Present all core services with trust-first, mobile-first UX.
- Keep deployment and SEO production-safe on Netlify.
- Run booking/payment workflow securely without a traditional backend.

## Target Users
- Individuals/families needing certificates and municipal document support.
- Business owners needing legal, GST, licensing, property, and KMC services.
- Primarily Kolkata/India audience (English UI).

## Tech Stack (Current)
- React: ^19.2.0
- React DOM: ^19.2.0
- React Router DOM: ^7.13.0
- React Icons: ^5.5.0
- TypeScript: ~5.9.3
- Vite: npm:rolldown-vite@7.2.5
- Tailwind CSS: ^4.1.18
- PostCSS: ^8.5.6
- ESLint: ^9.39.1
- Hosting: Netlify (SPA + Functions)

## Architecture Overview
- Frontend SPA in src with route-based pages.
- Shared layout and reusable sections/components in src/components.
- Central SEO meta/canonical/schema manager in src/components/SeoManager.tsx.
- Booking flow:
  - UI modal wizard: src/components/BirthCertificateBookingModal.tsx
  - Frontend API mapping: src/api/birthBookingApi.ts
  - Types/contracts: src/types/birthBooking.ts
  - Entry point on certificates page.
- Edge/proxy layer:
  - Netlify Function: netlify/functions/booking-proxy.mjs
  - Route mapping in netlify.toml: /api/booking -> /.netlify/functions/booking-proxy
- Data/payment backend (external): Google Apps Script + Google Sheets + Razorpay.

## Folder Structure Notes
- src/pages/services/* are long-form service pages and carry most page-specific UI density.
- src/components/SectionHero.tsx is used by About/Policy pages; many service pages still use custom hero blocks.
- public/robots.txt and public/sitemap.xml are hand-maintained SEO assets.

## Major Decisions and Why
1) Switched to clean path routing (no hash routing).
- Why: SEO friendliness, professional URLs, better indexing.

2) Added canonical host redirects in netlify.toml.
- Why: prevent duplicate host indexing (http/www/apex variants).

3) Added dedicated 404 route/page with noindex.
- Why: avoid soft-404 behavior and stop unknown URLs from being indexed.

4) Added Netlify booking proxy + env-based API URL preference.
- Why: Apps Script CORS/preflight limitations make direct browser calls brittle.

5) Kept frontend booking calls as simple requests when direct mode is used.
- Why: avoid preflight failures on Apps Script endpoint.

6) Payment verification and final booking persistence are server-authoritative in Apps Script.
- Why: prevent tampering and race conditions; keep booking integrity.

7) Mobile-first form/booking UX and strict phone validation.
- Why: majority of users expected on mobile; reduce input mistakes and retries.

8) Hero sizing moved to viewport-minus-header approach.
- Why: ensure above-the-fold hero fit with sticky header present.

## Non-obvious Workarounds / Important Explanations
- birthBookingApi uses Content-Type text/plain for POST body even though body is JSON string.
  - Intentional for CORS-simple request compatibility with Apps Script direct mode.
- Netlify proxy exists to handle OPTIONS preflight and forward to Apps Script safely.
- Unknown routes are redirected to /404 in SPA routing; canonical for unknowns is normalized to /404 in SeoManager.
- /home is permanently redirected to / to clean historical crawl noise.

## MUST NOT Change Without Discussion
- Booking/payment verification order and server-side validations in Apps Script template.
- Netlify proxy routing and required env var contract.
- SEO canonical host redirects and robots/sitemap handling.
- /404 noindex behavior and wildcard route handling.
- Env variable names used by deployed frontend and Netlify function.

## External APIs / Services / Config Dependencies
- Google Apps Script Web App URL
- Google Sheets tabs used by script: Bookings, Settings, Slots
- Razorpay Orders/Payments APIs (server-side via Apps Script)
- Netlify Function runtime for booking proxy

### Environment Variables
Frontend:
- VITE_BOOKING_API_URL (preferred, usually /api/booking)
- VITE_BOOKING_SCRIPT_URL (fallback direct Apps Script URL)

Netlify server env:
- NETLIFY_BOOKING_SCRIPT_URL (upstream Apps Script endpoint used by function)

## Known Bugs / Limitations / Tech Debt
- src/pages/services/ImportExport.tsx is placeholder (currently empty component).
- src/pages/services/VisasImmigration.tsx is placeholder (currently empty component).
- Service pages use mixed hero patterns (shared SectionHero vs custom hero blocks).
- Large bundle warning (>500KB) during build; not currently blocking.
- Some UI spacing still manually tuned page-by-page (not fully tokenized).

## Current State
Completed:
- Clean routing + SEO baseline + canonical redirects + sitemap/robots hardening
- Booking modal flow + API layer + types + certificates integration
- Netlify booking proxy + env wiring
- 404 page + noindex behavior
- Mobile-first improvements across key pages

In progress / recent focus:
- Hero fit tuning (mobile and desktop viewport-fit behavior with sticky header)
- Section spacing rhythm refinement across service pages

Next:
- Replace placeholder ImportExport/Visas pages with real content
- Add tests (at least critical API shape and route meta checks)
- Optional code splitting to reduce bundle warning

## Coding Conventions and Patterns
- TypeScript-first, explicit interfaces for API contracts.
- Keep changes surgical and page-scoped; avoid broad refactors unless requested.
- Prefer route-local content data objects for long service pages.
- Maintain Tailwind utility style already present in file; do not re-theme globally.
- Preserve SEO behavior in SeoManager whenever routes are added/changed.

## Behavior (How to Work With This User)
- Always ask before refactoring anything.
- Always explain what you are going to do before doing it.
- Never change more than what is asked.
- Flag if a suggestion could break existing functionality.
- Prefer small, safe, incremental changes over large rewrites.
- If something is unclear, ask instead of assuming.
- Always consider edge cases and explicitly mention them.
- When suggesting code, explain why, not only what.

## Session-Critical Notes
- User prefers mobile-first + conversion-focused UI, but wants safe incremental edits.
- Deployment preference is GitHub push -> Netlify auto deploy.
- Booking should be considered production-sensitive: avoid breaking payment/verification semantics.
