/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'teal-1': '#f8fefd',
        'teal-2': '#f1fcfb',
        'teal-3': '#d8faf6',
        'teal-4': '#c0f5f0',
        'teal-5': '#a7eee7',
        'teal-6': '#8ce2da',
        'teal-7': '#67d2c9',
        'teal-8': '#02beb4',
        'teal-9': '#63eadf',
        'teal-10': '#57dfd5',
        'teal-11': '#007972',
        'teal-12': '#024440',
        'gray-1': '#f3fffe',
        'gray-2': '#e9fffc',
        'gray-3': '#def6f3',
        'gray-4': '#d4efec',
        'gray-5': '#cbe8e4',
        'gray-6': '#bfe2dd',
        'gray-7': '#b3d7d2',
        'gray-8': '#99c6c0',
        'gray-9': '#4c9c94',
        'gray-10': '#42918a',
        'gray-11': '#27716a',
        'gray-12': '#002824',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      height: {
        'screen-75': '75vh',
      },
      minHeight: {
        'screen-75': '75vh',
      },
      maxHeight: {
        'screen-75': '75vh',
      },
      minWidth: {
        'screen-75': '75vw',
      },
      maxWidth: {
        'screen-75': '75vw',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};
