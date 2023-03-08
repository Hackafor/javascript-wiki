/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',


    },
    
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
