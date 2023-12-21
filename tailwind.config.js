/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionDuration: {
        10000: '10000ms',
        60000: '60000ms',
        180000: '180000ms',
      },
      colors: {
        background: '#EFEEE7',
        greylight: '#E7E7E7',
        greymedium: '#5F5F5F',
        anthrazit: '#232323',
        bluedark: '#0097C5',
        bluelight: '#A0D4DE',
        yellowdark: '#F9BB00',
        yellowlight: '#FFE062',
      },
    },
    fontFamily: {
      sourceSerif: ['"Source Serif 4"', 'serif'],
      golos: ['Golos Text', 'sans-serif'],
      josefin: ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
