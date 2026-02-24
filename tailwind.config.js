/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        sage: {
          50: 'var(--color-e8f0eb)',
          100: 'var(--color-d1e0d6)',
          200: 'var(--color-b7cdbd)',
          300: 'var(--color-9dbba4)',
          400: 'var(--color-83a88a)',
          500: 'var(--color-6b9373)',
          600: 'var(--color-53785b)', // PRIMARY
          700: 'var(--color-456d4d)',
          800: 'var(--color-3d5943)',
          900: 'var(--color-2d4432)',
          950: 'var(--color-1a2820)',
        },
      },
    },
  },
  plugins: [],
}
