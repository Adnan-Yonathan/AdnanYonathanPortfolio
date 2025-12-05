import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          secondary: '#111113',
          tertiary: '#18181b',
        },
        surface: '#1c1c1f',
        border: {
          DEFAULT: '#27272a',
          light: '#3f3f46',
        },
        accent: {
          1: '#6366f1',
          2: '#8b5cf6',
          3: '#a855f7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease forwards',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'scroll': 'scroll 1.5s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scroll: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(6px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
