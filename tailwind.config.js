/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with class strategy
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
        't-flax': '#EEF8A1',
        // Light mode colors inspired by LinkedIn
        'bg-light': '#F3F6F8', // Light background similar to LinkedIn's page background
        'text-dark': '#212121', // Dark text for readability
        'primary-light': '#0073B1', // LinkedIn's primary blue color
        'accent-light': '#2867B2', // Accent blue similar to LinkedIn buttons
        'secondary-light': '#8D6E63', // Muted secondary text or background
        'border-light': '#E1E9EE', // Border color similar to LinkedIn's light borders

      },
    },
  },
  plugins: [require('daisyui')],
}