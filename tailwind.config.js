/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      colors: {
      draculaBlue: "#282a36",
      draculaPurple: "#6272a4",
      draculaPink: "#ff79c6",
    },},
  },
  plugins: [],
}