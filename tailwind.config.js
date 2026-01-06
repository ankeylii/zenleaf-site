/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zen: {
          50: "#f5f7f6",
          100: "#e6ebe8",
          200: "#cfd8d3",
          300: "#b0c0b8",
          400: "#8aa49a",
          500: "#6c8f82",
          600: "#54766a",
          700: "#445f55",
          800: "#394d46",
          900: "#2f3f3a",
        },
        stone: {
          850: "#1f1f1f",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

