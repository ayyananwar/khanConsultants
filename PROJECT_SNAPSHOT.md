# PROJECT_SNAPSHOT

## Project Tree (excluding node_modules/dist/.git internals)

khanConsultants/
- .env
- .env.example
- .gitignore
- BIRTH_CERTIFICATE_BOOKING_APPS_SCRIPT.md
- DESIGN_GUIDELINES.md
- GOOGLE_APPS_SCRIPT_SETUP.md
- README.md
- eslint.config.js
- index.html
- netlify.toml
- package-lock.json
- package.json
- postcss.config.cjs
- tailwind.config.js
- tsconfig.app.json
- tsconfig.json
- tsconfig.node.json
- vite.config.ts
- .github/
  - workflows/
    - deploy.yml
- netlify/
  - functions/
    - booking-proxy.mjs
- public/
  - footerlogo.svg
  - hero.png
  - icone.svg
  - logo.svg
  - robots.txt
  - sitemap.xml
  - vite.svg
- src/
  - App.tsx
  - index.css
  - main.tsx
  - tokens.ts
  - api/
    - birthBookingApi.ts
  - components/
    - AboutSections.tsx
    - Accordion.tsx
    - BirthCertificateBookingModal.tsx
    - Footer.tsx
    - Header.tsx
    - HomeSections.tsx
    - Layout.tsx
    - ScrollToTop.tsx
    - SectionHero.tsx
    - SeoManager.tsx
    - ServiceCard.tsx
    - index.ts
  - pages/
    - About.tsx
    - Contact.tsx
    - Home.tsx
    - NotFound.tsx
    - PrivacyPolicy.tsx
    - TermsOfService.tsx
    - services/
      - Certificates.tsx
      - GSTAccounting.tsx
      - ImportExport.tsx
      - KolkataCorporation.tsx
      - LegalServices.tsx
      - Licenses.tsx
      - Property.tsx
      - VisasImmigration.tsx
  - types/
    - birthBooking.ts

## Tech Stack (Exact)
- React: ^19.2.0
- React DOM: ^19.2.0
- React Router DOM: ^7.13.0
- React Icons: ^5.5.0
- TypeScript: ~5.9.3
- Vite: npm:rolldown-vite@7.2.5
- Tailwind CSS: ^4.1.18
- PostCSS: ^8.5.6
- ESLint: ^9.39.1
- Netlify Functions for proxy

## Major Features Implemented
- Multi-page marketing site with detailed service pages
- SEO manager with dynamic route metadata + JSON-LD
- Canonical host redirects and robots/sitemap support
- 404 route/page with noindex behavior
- Birth Certificate booking modal:
  - multi-step form
  - slot selection and waitlist handling
  - Razorpay checkout integration
  - payment verification and confirmation path
- Netlify function proxy for booking API (preflight-safe architecture)

## In Progress
- Hero and section spacing tuning (mobile/desktop viewport fit consistency)
- Remaining visual rhythm cleanup on long-form pages as needed

## Last Working Context
- Last active area: hero fold behavior (header-aware viewport fit) and spacing.
- Current concern from user: mobile hero should fit in one screen without scrolling while preserving readable spacing and reduced header offset.
- Build status: passing.
