/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode using the "class" strategy
  theme: {
    extend: {
      colors: {
        primary: "#0073B1", // Primary color common across themes
        light: {
          background: "#F3F6F8", // Light background
          text: "#212121", // Dark text for readability
          accent: "#2867B2", // Accent blue
          secondary: "#8D6E63", // Muted secondary color
          border: "#E1E9EE", // Light border color
        },
        dark: {
          background: "#111924", // Dark background
          text: "#B2FFF3", // Light text for readability
          accent: "#A3B1AF", // Accent color for dark mode
          secondary: "#101D2D", // Secondary dark shade
          border: "#0073B1", // Dark border color
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
