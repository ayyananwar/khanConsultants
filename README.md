# Khan Consultants - B2B Consulting Website

A professional B2B consulting website built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

## ✅ Current Design Source

For the active design system and implementation rules, use:

- `src/tokens.ts` (canonical token source)
- `DESIGN_GUIDELINES.md` (project-level design rules)

Older sections below may include legacy references from earlier iterations.

## 🎨 Design System

### Global Styling Rules

#### Typography
- **Font Family**: Inter (primary), Roboto (fallback)
- **Font Import**: Google Fonts via `src/index.css`
- **Line Height**: 1.6 for better readability

#### Buttons
- **Shape**: `rounded-full` (pill-shaped)
- **Primary Button**: Blue background (`bg-blue-600`) with white text and blue-700 hover state
- **Secondary Button**: Gray background with slate text
- **Outline Button**: Transparent with white border
- **Interactive**: All buttons include smooth hover transitions

#### Cards
- **Background**: White (`bg-white`)
- **Border Radius**: `rounded-xl` (extra large radius)
- **Shadow**: `shadow-lg` with `hover:shadow-xl` on hover
- **Padding**: `p-8` (2rem padding)
- **Use Cases**: Services section, portfolio items, testimonials

#### Header
- **Position**: `sticky` at top with `z-50` (always visible)
- **Initial State**: Transparent background
- **Scroll State**: Transitions to solid dark (`bg-slate-900`) with `shadow-lg`
- **Transition Duration**: Smooth 300ms animation
- **Navigation**: Responsive menu with links
- **CTA Button**: "Get Started" button in header

#### Hero Sections & Footer
- **Background Image**: Dark professional image (`https://khanconsultants.in/assets/bg.jpg`)
- **Overlay**: Black semi-transparent overlay
  - Hero: `bg-black/50` (50% opacity)
  - Footer: `bg-black/60` (60% opacity)
- **Text Color**: White (`text-white`) for maximum contrast
- **Content Alignment**: Centered for hero, multi-column for footer

### Color Palette
- **Primary Blue**: `#2563eb` (bg-blue-600)
- **Primary Hover**: `#1d4ed8` (bg-blue-700)
- **Dark Background**: `#0f172a` (bg-slate-900)
- **Light Text**: `#d1d5db` (text-gray-300)
- **Dark Text**: `#0f172a` (text-slate-900)
- **White Cards**: `#ffffff` (bg-white)
- **Light Background**: `#f9fafb` (bg-gray-50)

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Sticky header with scroll effect
│   ├── SectionHero.tsx    # Hero section component
│   ├── ServiceCard.tsx    # Service card component
│   ├── Footer.tsx         # Footer with background and multiple columns
│   └── index.ts           # Centralized component exports
├── App.tsx                # Main application component
├── index.css              # Global styles + Tailwind CSS import
├── main.tsx               # React entry point
└── assets/                # Static assets
```

---

## 🛠️ Components

### Header
**File**: [src/components/Header.tsx](src/components/Header.tsx)

- **Features**:
  - Sticky positioning at viewport top
  - Automatic scroll detection
  - Transparent → Dark background transition
  - Responsive navigation menu
  
- **Props**: None (uses internal state)

- **Navigation Items**:
  - Services
  - About
  - Portfolio
  - Contact

- **CTA**: "Get Started" button

**Usage**:
```tsx
import { Header } from './components';

<Header />
```

---

### Hero
**File**: [src/components/Hero.tsx](src/components/Hero.tsx)

- **Features**:
  - Full viewport height
  - Background image with dark overlay
  - Centered content with large heading
  - Dual CTA buttons (primary + outline)
  
- **Props**: None (static content)

- **Content**:
  - Main heading: "Strategic Consulting for Enterprise Growth"
  - Subheading with value proposition
  - Two CTA buttons

**Usage**:
```tsx
import { Hero } from './components';

<Hero />
```

---

### Card
**File**: [src/components/Card.tsx](src/components/Card.tsx)

- **Features**:
  - Reusable white card component
  - Shadow with hover enhancement
  - Rounded corners (rounded-xl)
  - Optional icon support
  
- **Props**:
  - `title` (string): Card heading
  - `description` (string): Card content
  - `icon?` (ReactNode): Optional emoji or icon

- **Interactive**:
  - Hover shadow enhancement: `shadow-lg` → `hover:shadow-xl`

**Usage**:
```tsx
import { Card } from './components';

<Card 
  title="Digital Strategy"
  description="Transform your business with cutting-edge digital solutions."
  icon="🚀"
/>
```

---

### Services
**File**: [src/components/Services.tsx](src/components/Services.tsx)

- **Features**:
  - Grid layout with Card components
  - Light gray background section
  - Responsive grid: 2 cols (tablet), 4 cols (desktop)
  - Section heading and subheading
  
- **Props**: None (uses internal service data)

- **Service Items** (4 cards):
  1. Digital Strategy (🚀)
  2. Process Optimization (⚙️)
  3. Change Management (🔄)
  4. Technology Integration (💻)

**Usage**:
```tsx
import { Services } from './components';

<Services />
```

---

### Footer
**File**: [src/components/Footer.tsx](src/components/Footer.tsx)

- **Features**:
  - Background image with dark overlay
  - Multi-column layout
  - Company info, services, company links, contact details
  - Copyright and legal links footer
  
- **Props**: None (static content)

- **Sections**:
  1. **Company Info**: Logo and description
  2. **Services**: Quick links to service categories
  3. **Company**: About, Team, Portfolio, Blog
  4. **Contact**: Email, phone, location

- **Bottom**: Copyright notice and legal links

**Usage**:
```tsx
import { Footer } from './components';

<Footer />
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16 or higher
- **npm** or **yarn** package manager

### Installation

```bash
npm install
```

Installs all dependencies including React, Tailwind CSS v4, and Vite.

### Development Server

```bash
npm run dev
```

- Starts development server at `http://localhost:5173/`
- Hot Module Replacement (HMR) enabled for instant updates
- Open your browser and navigate to the localhost URL

### Production Build

```bash
npm run build
```

- Creates optimized production build in `dist/` directory
- Minifies and bundles all assets
- Ready for deployment to hosting services

### Preview Production Build

```bash
npm run preview
```

- Launches local server with production build
- Useful for testing before deployment

---

## 📦 Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 18+ | UI library |
| TypeScript | 5+ | Type safety |
| Vite | 7+ | Build tool & dev server |
| Tailwind CSS | 4+ | Utility-first CSS |
| PostCSS | 8+ | CSS processing |
| Inter Font | Latest | Typography |

---

## 🎯 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    // Update primary color
        secondary: '#1e40af',  // Add secondary color
      },
    },
  },
}
```

Then update component classes to use new colors.

### Updating Hero Background Image

In [src/components/Hero.tsx](src/components/Hero.tsx):

```tsx
style={{
  backgroundImage: 'url(https://your-image-url.com/bg.jpg)',
  backgroundColor: '#1a1a2e', // Fallback color
}}
```

### Adding New Components

1. Create new file: `src/components/YourComponent.tsx`
2. Export in [src/components/index.ts](src/components/index.ts):
   ```ts
   export { default as YourComponent } from './YourComponent';
   ```
3. Import and use in [src/App.tsx](src/App.tsx)

### Modifying Button Styles

Use Tailwind classes directly in components:
```tsx
<button className="rounded-full px-8 py-3 bg-blue-600 hover:bg-blue-700 transition">
  Button Text
</button>
```

Or create custom utility classes in [tailwind.config.js](tailwind.config.js):
```js
theme: {
  extend: {
    // Add custom utilities here
  }
}
```

### Customizing Typography

Update [src/index.css](src/index.css) to import different fonts or change font families in `tailwind.config.js`:

```js
theme: {
  extend: {
    fontFamily: {
      sans: ['Roboto', 'Inter', 'system-ui', 'sans-serif'],
    },
  },
}
```

---

## 📱 Responsive Design

All components follow mobile-first design principles:

- **Mobile**: Single column, touch-friendly buttons
- **Tablet (md)**: 2-column grids, expanded navigation
- **Desktop (lg+)**: Full 4-column grids, side-by-side layouts

### Breakpoints Used
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

---

## 🔧 Configuration Files

- **`vite.config.ts`**: Vite build configuration
- **`tailwind.config.js`**: Tailwind CSS theme and plugin configuration
- **`postcss.config.cjs`**: PostCSS plugins (@tailwindcss/postcss)
- **`tsconfig.json`**: TypeScript compiler options
- **`tsconfig.app.json`**: App-specific TypeScript configuration
- **`tsconfig.node.json`**: Node.js TypeScript configuration

---

## 📄 License

© 2026 Khan Consultants. All rights reserved.

---

## 🤝 Support

For questions or issues, please contact:
- **Email**: info@khanconsultants.in
- **Phone**: +91-1234-567-890
- **Location**: New Delhi, India
