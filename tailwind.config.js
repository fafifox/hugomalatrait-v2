/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--barlow-font)', ...fontFamily.sans],
        sans: ['var(--barlow-font)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
}
