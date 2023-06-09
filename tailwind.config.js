/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
