module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      width: {
        fit: 'fit-content',
      },
      boxShadow: {
        custom: '-8px 8px 0 0 rgba(4, 120, 87)',
        active: '-4px 4px 0 0 rgba(4, 120, 87)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
