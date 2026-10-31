/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#08080a',
          900: '#0e0e11',
          850: '#141418',
          800: '#1a1a20',
          700: '#272730',
          600: '#3f3f4a',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20ba5a',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.3em',
      },
    },
  },
  plugins: [],
}
