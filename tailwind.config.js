/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'Helvetica', 'Arial', 'sans-serif'], // Añadir 'Ubuntu' como la fuente principal
        heading: ['HeadingNow', 'sans-serif'],
      },
      colors: {
        ceniteg: '#40414a', // Define tu color personalizado aquí
      },
      wordSpacing: {
        'wide': '0.5em',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-justify': {
          'text-align': 'justify',
        },
        '.text-align-last-justify': {
          'text-align-last': 'justify',
        },
      });
    },
  ],
}