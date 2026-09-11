/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07090e',
        surface: '#0d111c',
        'surface-card': '#111726',
        'surface-hover': '#182138',
        border: 'rgba(255, 255, 255, 0.08)',
        primary: {
          DEFAULT: '#38bdf8',
          hover: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.3)',
        },
        accent: {
          DEFAULT: '#a855f7',
          hover: '#9333ea',
          glow: 'rgba(168, 85, 247, 0.3)',
        },
        python: '#f59e0b',
        terminal: '#10b981',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(56,189,248,0.4))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(168,85,247,0.6))' },
        }
      }
    },
  },
  plugins: [],
}
