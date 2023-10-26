/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'red': '#E24C4C',
        'darkblue': '#002251',
        "muted":"#7A869A"
      },
    },
  },
  plugins: [],
}

