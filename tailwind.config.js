/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    
    extend: {
      colors:{
        primary:colors.yellow,
      },
      fontSize:{
        'bigbig': '10rem',
      },
      fontFamily:{
        'songfont':['"Noto Sans SC"']
      },
      
    },
  },
  plugins: [],
  darkMode: 'class',
}

