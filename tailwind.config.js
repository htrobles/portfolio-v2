/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#E0E9FA',
          200: '#BDD0F5',
          300: '#9AB8EF',
          400: '#769FEA',
          500: '#5386E4',
          600: '#2364DC',
          700: '#1B4EAC',
        },
        secondary: {
          100: '#FE39F5',
          200: '#FD10F4',
          300: '#E302DA',
          400: '#BB01B3',
          500: '#92018C',
          600: '#5A0157',
          700: '#230021',
        },
        black: '#000000',
        white: '#F0F0F0',
        danger: '#FF4343',
        success: '#91EC09',
      },
      fontFamily: {
        display: ['Radio Canada Big', 'sans-serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        xs: '0.7rem',
        sm: '0.8rem',
        base: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      width: {
        '200px': '200px',
      },
    },
  },
  plugins: [],
};
