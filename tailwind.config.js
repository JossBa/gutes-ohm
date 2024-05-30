/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'quadrat-outline': "url('/public/img/quadrat-outline.svg')",
        'quadrat-full': "url('/public/img/quadrat-full.svg')",
        'dreieck-outline': "url('/public/img/dreieck-outline.svg')",
        'dreieck-full': "url('/public/img/dreieck-full.svg')",
      },
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
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sourceSerif: ['"Source Serif 4"', 'serif'],
      golos: ['Golos Text', 'sans-serif'],
      josefin: ['Josefin Sans', 'sans-serif'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
