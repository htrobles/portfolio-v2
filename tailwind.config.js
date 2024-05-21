/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#5386E4',
      secondary: '#92018C',
      black: '#000000',
      white: '#F0F0F0',
    },
    fontFamily: {
      display: ['Radio Canada Big', 'sans-serif'],
      sans: ['Quicksand', 'sans-serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
    },
  },
  plugins: [],
};
