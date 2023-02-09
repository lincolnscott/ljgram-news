/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'LJ': '#030013',
      'LJblue': '#00cae3',
      'LJred': '#e50042',
  
      'gray-light': '#778da9',
      'gray': '#202124',
      'gray-dark': '#1b263b',
      'text': '#E7EBEC',
    },
    fontFamily: {
      sans: ['Helvetica Neue'],
      serif: ['Imperial'],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp")
  ],
  
}
