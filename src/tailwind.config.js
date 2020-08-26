const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        default: '#ffe500',
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans]
      },
      },
    }
  },
  variants:{},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar"
    })
  ]
}
