module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mont': [ 'Montserrat' ,'system-ui'],
      }
    },
    screen: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},

      'xs': {'max': '400px'}
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

