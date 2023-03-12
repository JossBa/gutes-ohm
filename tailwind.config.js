/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EFEEE7',
        yellowdark: '#F9BB00',
      },
    },
    fontFamily: {
      sfPro: ['Source Serif Pro', 'serif'],
      golos: ['Golos Text', 'sans-serif'],
    },
  },
  plugins: [],
}
