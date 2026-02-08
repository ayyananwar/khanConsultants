# Sage Color System - Khan Consultants

## Primary Color Palette

### Core Sage Colors
| Color | Hex Code | Variable | Usage |
|-------|----------|----------|-------|
| **Sage Primary** | `#53785b` | `primary` | Main brand color, buttons, accents, card icons |
| **Sage Dark** | `#2c4d3f` | `dark` | Headings, dark text, footer, form containers |
| **Sage Light** | `#d6fadc` | `light` | Section backgrounds, light cards |
| **Sage Extra Light** | `#e8f0eb` | `extra-light` | Gradient endpoints, subtle backgrounds |
| **Sage Medium** | `#6b9373` | `medium` | Button hover states, secondary gradients |
| **Sage Medium Light** | `#86ac8d` | `medium-light` | Icon backgrounds, accent gradients |

## Color Application Guidelines

### Section Backgrounds
- **Light Sections**: `#d6fadc` (Sage Light) - Default background for most sections
- **Dark Sections**: `#53785b` (Sage Primary) - CTA sections, testimonial highlights
- **Alternating Pattern**: Light → Dark → Light → Dark (across About, Industries, Process, Testimonials, FinalCTA)

### Typography
- **Headings on Light**: Text `#2c4d3f` (Sage Dark)
- **Headings on Dark**: Text `white`
- **Body Text on Light**: Text `#53785b` (Sage Primary)
- **Body Text on Dark**: Text `white`
- **Labels/Small Text**: Text `#53785b` (Sage Primary)

### Cards & Containers
- **Light Card Background**: `bg-white` with `border border-[#d6fadc]`
- **Dark Card Background**: `bg-[#53785b]` to `gradient from-[#53785b] to-[#2c4d3f]`
- **Card Border on Light**: `border-[#d6fadc]`
- **Card Border on Dark**: `border border-white/10`

### Buttons & CTAs
- **Primary Button (on light)**: `from-[#86ac8d] to-[#6b9373]`
- **Primary Button (on dark)**: `from-[#86ac8d] to-[#6b9373]`
- **Button Hover**: Reverse gradient or darken by one shade
- **Secondary Button**: `bg-[#d6fadc] text-[#53785b]`

### Form Elements
- **Form Container (on light)**: `bg-white border border-[#d6fadc]`
- **Form Container (on dark)**: `bg-gradient-to-br from-[#53785b] to-[#2c4d3f]`
- **Input Field (on dark)**: `bg-white/95 border border-white/30`
- **Input Focus**: `focus:ring-2 focus:ring-white/30`

### Icons
- **Icon Container Gradient**: `from-[#6b9373] to-[#86ac8d]`
- **Icon Background (light)**: `bg-[#d6fadc]`
- **Icon Background (dark)**: `bg-gradient-to-br from-[#6b9373] to-[#86ac8d]`

### Accent Colors (Brand Colors)
- **Blue (Call/Phone)**: `#2563eb`
- **Green (WhatsApp)**: `#16a34a`
- **Orange (Email/Location)**: `#ea580c`
- **Yellow (Location alternate)**: `#fbbf24`
- **Pink/Purple (Instagram)**: Gradient `from-pink-500 to-purple-600`

### State Indicators
- **Success**: `emerald-500/20` background, `emerald-500` border
- **Error**: `rose-500/20` background, `rose-500` border
- **Info**: `blue-500/20` background
- **Warning**: `yellow-500/20` background

## Component-Specific Examples

### AboutSection
```
- Section Background: bg-[#d6fadc]
- Heading Label: text-[#53785b] font-bold
- Main Heading: text-[#2c4d3f] font-bold
- Subheading: text-[#53785b]
- Value Cards: bg-white border-[#d6fadc]
- Card Title: text-[#2c4d3f]
- Card Text: text-[#53785b]
- Stats Container: bg-white border-[#d6fadc]
- Why Choose Cards: bg-white border-[#d6fadc]
- CTA Button: bg-[#53785b] text-white
```

### IndustriesSection
```
- Section Background: bg-[#d6fadc]
- Section Title: text-[#2c4d3f]
- Section Subtitle: text-[#53785b]
- Industry Card: bg-white border-[#d6fadc]
- Industry Title: text-[#2c4d3f]
- Industry Subtitle: text-[#53785b]
- Dark Container: bg-[#53785b]
- Dark Text: text-white
- Light Service Cards: bg-white border-[#d6fadc]
- CTA Button: bg-[#d6fadc] text-[#53785b]
```

### ProcessTimeline
```
- Section Background: bg-[#d6fadc]
- Heading Label: text-[#53785b] font-bold
- Main Heading: text-[#2c4d3f]
- Subtitle: text-[#53785b]
- Step Card: bg-white border-[#d6fadc]
- Step Title: text-[#2c4d3f]
- Step Description: text-[#53785b]
- Benefit Cards: bg-white border-[#d6fadc]
- Benefit Title: text-[#2c4d3f]
```

### Testimonials
```
- Section Background: bg-[#d6fadc]
- Section Title: text-[#2c4d3f]
- Section Subtitle: text-[#53785b]
- Review Card: bg-white border-[#d6fadc]
- Review Text: text-[#53785b]
- Author Name: text-[#2c4d3f]
- Author Company: text-[#53785b]
- Author Avatar Circle: bg-[#d6fadc]
- Avatar Icon: text-[#53785b]
- CTA Container: bg-[#53785b]
- CTA Button: bg-[#d6fadc] text-[#53785b]
```

### FinalCTA
```
- Section Background: bg-gradient-to-br from-[#d6fadc] to-[#e8f0eb]
- Decorative Blobs: bg-[#53785b] opacity-5
- Get Started Label: text-[#53785b] font-bold
- Main Heading: text-[#2c4d3f]
- Subtitle: text-gray-700
- Quick Action Buttons: Brand colors (blue, green, orange, yellow)
- Form Container: bg-gradient-to-br from-[#53785b] to-[#2c4d3f]
- Form Title: text-white
- Form Labels: text-white font-semibold
- Form Inputs: bg-white/95 border-white/30
- Input Focus: focus:ring-white/30
- Submit Button: from-[#86ac8d] to-[#6b9373] hover:from-[#6b9373] hover:to-[#53785b]
- Business Hours Icon: from-[#6b9373] to-[#86ac8d]
- Business Hours Box: bg-white/10 border-white/20
- Contact Card: from-[#53785b] to-[#2c4d3f] border-white/10
- Contact Title: text-white font-bold
- Contact Text: text-white/80
- Location Icon: bg-orange-500
- Social Button: Blue/Pink/Green/Orange with white icons
- Success Message: emerald-500/20 border-emerald-400
- Error Message: rose-500/20 border-rose-400
```

## Tailwind Utility Classes Reference

### Background Colors
```jsx
// Light backgrounds
bg-[#d6fadc]  // Sage Light
bg-[#e8f0eb]  // Sage Extra Light
bg-white      // Pure white cards on light sections

// Dark backgrounds
bg-[#53785b]  // Sage Primary
bg-[#2c4d3f]  // Sage Dark

// Gradients
bg-gradient-to-br from-[#d6fadc] to-[#e8f0eb]
bg-gradient-to-br from-[#53785b] to-[#2c4d3f]
bg-gradient-to-br from-[#86ac8d] to-[#6b9373]
bg-gradient-to-br from-[#6b9373] to-[#86ac8d]
```

### Text Colors
```jsx
text-[#53785b]   // Sage Primary text
text-[#2c4d3f]   // Sage Dark text
text-white       // White text on dark backgrounds
text-gray-700    // Gray text
```

### Border Colors
```jsx
border-[#d6fadc]  // Light sage border
border-white/10   // Subtle white border on dark
border-white/20   // More visible white border on dark
border-white/30   // White border focus state
```

### Focus States
```jsx
focus:outline-none
focus:border-white
focus:ring-2
focus:ring-white/30
```

### Opacity Utilities
```jsx
bg-white/95    // Almost opaque white
bg-white/10    // Very transparent white
opacity-5      // Very subtle decorative elements
```

## Brand Color Accents

These colors complement the sage palette and should be used sparingly for action items and status indicators:

| Purpose | Color | Hex Code | Usage |
|---------|-------|----------|-------|
| Call/Phone | Blue | `#2563eb` | Phone icon, call buttons |
| WhatsApp | Green | `#16a34a` | WhatsApp buttons |
| Email | Orange | `#ea580c` | Email buttons, email icons |
| Location | Orange | `#ea580c` | Location icon, map buttons |
| Instagram | Gradient | Pink→Purple | Social media links |
| Facebook | Blue | `#3b5998` | Social media links |
| Success | Emerald | `#10b981` | Success messages, checkmarks |
| Error | Rose | `#f43f5e` | Error messages, alerts |

## Implementation Checklist

- [x] AboutSection - Sage colors applied
- [x] IndustriesSection - Sage colors applied
- [x] ProcessTimeline - Sage colors applied
- [x] Testimonials - Sage colors applied
- [x] FinalCTA - Sage colors applied
- [ ] Header/Navigation - Needs sage integration
- [ ] Footer - Needs sage integration
- [ ] All Service Cards - Needs sage integration
- [ ] Contact Page - Needs sage integration
- [ ] All other pages - Needs sage integration

## Color Harmony Rules

1. **Light sections** (`#d6fadc` background) use:
   - Headings: `#2c4d3f`
   - Body text: `#53785b`
   - White cards with `#d6fadc` borders
   - Sage-colored buttons and icons

2. **Dark sections** (`#53785b` to `#2c4d3f` gradient) use:
   - White text
   - White card borders with opacity (`white/10`, `white/20`)
   - White input backgrounds with opacity (`white/95`)
   - Sage accent icons and gradients

3. **Transitions**:
   - Alternate between light and dark sections for visual rhythm
   - Use sage gradients for smooth color transitions
   - Apply hover states that move along the sage gradient family

## Notes for Developers

- Always use exact hex codes: `#53785b`, `#2c4d3f`, `#d6fadc`, etc.
- Never hardcode color names - use hex codes for consistency
- Test text contrast for accessibility (WCAG AA minimum)
- Maintain consistent border thickness and radius across sections
- Use the gradient utilities for smooth color transitions
- Apply shadows to cards for depth without changing core colors
