/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        polu:{
          500: '#7412f5'
        },
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
