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
          DEFAULT: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#141414',
        },
        surface: '#1a1a1a',
        border: {
          DEFAULT: '#262626',
          light: '#404040',
        },
        accent: {
          1: '#ffffff',
          2: '#e5e5e5',
          3: '#a3a3a3',
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
