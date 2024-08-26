// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-navy': '#101D2D',
        'deep-navy': '#111924',
        'rich-blue': '#121E2E',
        'midnight-blue': '#0E1623',
        'slate-gray': '#B2FFF3',
        'steel-gray': '#A3B1AF',
        't-blue': '#121e2e7b',
        't-flax': '#EEF8A1'
      },
    },
  },
  plugins: [],
}
