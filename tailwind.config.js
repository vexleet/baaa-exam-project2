const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["index.html", "about-us.html", "bikes.html", "services.html", "tips-tricks.html", "styles/**"],
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
        'akira': ['"Akira Super"'],
        'montserrat': ['Montserrat']
      }
    },

  },
  plugins: [],
}