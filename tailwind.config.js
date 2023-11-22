const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        background: '#2a3640',
        customGray: '#ffffff40',
        modalBackground: '#1f2937',
        inputBackground: '#374151',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
