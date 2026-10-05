/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D4FF",
        dark: "#0a0e27",
        secondary: "#1a1f3a",
      },
      fontFamily: {
        sans: ['var(--font-noto)'],
        signika: ['var(--font-signika)'],
        'dm-sans': ['var(--font-dm-sans)'],
      },
      animation: {
        'fade-in': 'simpleFadeIn 0.3s ease-out forwards',
        'pulse-bar': 'pulseBar 1.5s ease-in-out infinite',
        'pulse-bar-delay': 'pulseBarShort 1.5s ease-in-out 0.2s infinite',
        'pulse-bar-delay2': 'pulseBar 1.5s ease-in-out 0.4s infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        simpleFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseBar: {
          '0%, 100%': { height: '24px', opacity: '0.6' },
          '50%': { height: '12px', opacity: '0.2' }
        },
        pulseBarShort: {
          '0%, 100%': { height: '16px', opacity: '0.6' },
          '50%': { height: '8px', opacity: '0.2' }
        },
        glow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' }
        }
      }
    },
  },
  plugins: [],
}
