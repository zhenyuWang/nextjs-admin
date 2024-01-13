const { nextui } = require('@nextui-org/react')

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbar': '5px 5px 5px rgba(0, 0, 0, .2)',
        'navbarDark': '5px 5px 5px rgba(0, 0, 0, .3)',
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
