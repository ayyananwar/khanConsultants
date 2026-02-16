# Design Guidelines (Single Source)

This file is the only design guideline document for the project.

## 1) Source of truth

- Colors, spacing, typography, shadows: `src/tokens.ts`
- If a style value is missing, add it to tokens first and then consume it

## 2) Section background rule (required)

- Use only two main section backgrounds in page flow:
	- `bg-white`
	- brand green (`designTokens.colors.sage[600]`, currently `#517358`)
- Alternate sections: white → green → white → green
- Dark hero/image sections are allowed only for page hero blocks

## 3) Text rule

- On white background:
	- heading: `designTokens.colors.sage[900]`
	- body: `designTokens.colors.sage[600]`
- On green background:
	- heading and body: white
- No decorative text-shadow effects

## 4) Button rule

- Primary button: green background, white text
- Secondary button: white background, green text, green border
- Hover states should only darken/lighten within existing token palette
- Keep button shape and padding consistent with existing rounded styles

## 5) Shadow rule

- Use subtle elevation only:
	- default cards/buttons: `shadow-lg`
	- hover state: `hover:shadow-xl`
- Avoid extra heavy or custom shadow patterns beyond this scale

## 6) Accent colors

- Keep accents limited to `designTokens.colors.brand` (phone, whatsapp, email, etc.)
- Accents should not replace primary white/green section rhythm

## 7) Practical checklist

- [ ] Sections alternate white and green consistently
- [ ] Text contrast follows background rules
- [ ] Buttons use consistent primary/secondary style
- [ ] Shadows stay within `shadow-lg` / `hover:shadow-xl`
- [ ] No new one-off design values without token update
