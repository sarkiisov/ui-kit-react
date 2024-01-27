import forms from '@tailwindcss/forms'

import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.cyan,
        danger: colors.red,
        warning: colors.yellow,
      },
      textColor: {
        muted: colors.gray[400]
      },
    },
  },
  plugins: [
    forms
  ],
}

