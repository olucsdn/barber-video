/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        barber: {
          black: '#080808',
          charcoal: '#0F0F11',
          surface: '#151518',
          card: '#1A1A1E',
          cardHover: '#212126',
          border: 'rgba(212, 175, 55, 0.15)',
          borderStrong: 'rgba(212, 175, 55, 0.35)',
        },
        gold: {
          50: '#FAF6EE',
          100: '#F3EAD7',
          200: '#E7D5B0',
          300: '#DCBF88',
          400: '#D1AA60',
          500: '#C5A880',
          600: '#B89758',
          700: '#8C6F34',
          800: '#614B1F',
          900: '#35280B',
          glow: 'rgba(197, 168, 128, 0.35)',
        }
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFCAAA 0%, #C5A880 50%, #9E8057 100%)',
        'gold-metallic': 'linear-gradient(90deg, #B89758 0%, #F5E5C9 50%, #B89758 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(8,8,8,0.7) 0%, rgba(15,15,17,0.95) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
