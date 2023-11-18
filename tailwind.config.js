const colors = require('tailwindcss/colors');

module.exports = {
<<<<<<< HEAD
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx}'],
=======
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
>>>>>>> d1125c779f16951a4cfa71d4875bbda502fe67cc
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
