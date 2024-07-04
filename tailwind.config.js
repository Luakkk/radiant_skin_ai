module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4a90e2',
        'primary-foreground': '#ffffff',
        'primary-dark': '#357ABD',
        'muted-foreground': '#6B7280',
        card: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
