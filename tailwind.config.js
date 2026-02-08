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
          50: '#e8f0eb',
          100: '#d1e0d6',
          200: '#b7cdbd',
          300: '#9dbba4',
          400: '#83a88a',
          500: '#6b9373',
          600: '#53785b', // PRIMARY
          700: '#456d4d',
          800: '#3d5943',
          900: '#2d4432',
          950: '#1a2820',
        },
      },
    },
  },
  plugins: [],
}
