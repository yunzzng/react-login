/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#54dbde",
      },
      backgroundColor: {
        black: "#5a5a9e"
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};