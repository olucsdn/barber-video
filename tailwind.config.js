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
          black: '#080809',
          charcoal: '#0E0F12',
          surface: '#14151A',
          card: '#191B22',
          cardHover: '#20222B',
          border: 'rgba(255, 255, 255, 0.08)',
          borderStrong: 'rgba(255, 255, 255, 0.16)',
          red: {
            DEFAULT: '#DC2626',
            light: '#EF4444',
            dark: '#991B1B',
            glow: 'rgba(220, 38, 38, 0.35)',
          },
          blue: {
            DEFAULT: '#2563EB',
            light: '#3B82F6',
            dark: '#1D4ED8',
            glow: 'rgba(37, 99, 235, 0.35)',
          },
        },
      },
      fontFamily: {
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'barber-pole': 'repeating-linear-gradient(135deg, #DC2626 0px, #DC2626 14px, #FFFFFF 14px, #FFFFFF 28px, #2563EB 28px, #2563EB 42px, #FFFFFF 42px, #FFFFFF 56px)',
        'barber-gradient': 'linear-gradient(135deg, #DC2626 0%, #2563EB 100%)',
        'red-gradient': 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #991B1B 100%)',
        'blue-gradient': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
        'dark-gradient': 'linear-gradient(180deg, rgba(8,8,9,0.7) 0%, rgba(14,15,18,0.95) 100%)',
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
