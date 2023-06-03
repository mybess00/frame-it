/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "bg": {
        100: "#062b43",
        300: "#011623",
        500: "#01090e",
        900: "#021018",
      },
      "c-primary": "#5cb4b6",
      "c-primary-strong": "#125354",
      "c-secondary": "#fafafd",
      "c-accent": "#2c6362",
      "btn-hover": "#274e69",
      sky: colors.sky,
      red: colors.red,
      pink: colors.pink,
      yellow: colors.yellow,
      green: colors.green,
      indigo: colors.indigo,
      gray: colors.gray,
      purple: colors.purple,
      black: colors.black,
      blue: colors.blue,
    },
    screens: {
      'sm': {'max': '768px'},
      'desktop': {'min': '769px'},
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      frameIt: {
        "base-100": "#062b43",
        "bg-300": "#011623",
        "primary": "#5cb4b6",
        "secondary": "#fafafd",
        "accent": "#2c6362",
      }
    },],
    
  },
}
