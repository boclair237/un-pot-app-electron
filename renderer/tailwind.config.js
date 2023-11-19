const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './renderer/components/**/*.{js,ts,jsx,tsx,mdx}',
    './renderer/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
    },
    extend: {},
  },
  plugins: [],
}
