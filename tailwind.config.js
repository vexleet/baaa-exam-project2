const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#383836',
          900: '#2C2A28'
        },
        secondary: '#FEED01'
      },
      fontFamily: {
        'sans': ['Norwester', ...defaultTheme.fontFamily.sans],
        'akira': ['"Akira Super"']
      }
    },

  },
  plugins: [],
}