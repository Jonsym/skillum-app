/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#f6f6f6"
        },
        blue: {
          300: "#389aff",
          600: "#4f05ec",
          800: "#010128",
          default: "#4f05ec",
        },
        main: "#E0F3FF",
      }
    },
  },
  plugins: [],
}
