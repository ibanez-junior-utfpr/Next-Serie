/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        'default-color-100': '#A38787',
        'default-color-300': '#8B7D7D',
        'default-color-800': '#FB0505',
      },
    },
  },
  plugins: [],
};
