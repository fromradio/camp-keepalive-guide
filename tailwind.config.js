/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0d1f0d',
          deep: '#081208',
          mid: '#1a2f1a',
          light: '#2a452a',
        },
        blood: {
          DEFAULT: '#cc3333',
          dark: '#8f1f1f',
          bright: '#ff4444',
        },
        paper: {
          DEFAULT: '#e8dcc0',
          dim: '#c9b98f',
        },
        ember: '#ff6b35',
        bone: '#d4d4c8',
      },
      fontFamily: {
        display: ['"Arial Black"', '"Helvetica Neue"', 'Arial', '"Microsoft YaHei"', 'sans-serif'],
        body: ['"Segoe UI"', '"Microsoft YaHei"', '"PingFang SC"', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-2px) rotate(-0.4deg)' },
          '40%': { transform: 'translateX(2px) rotate(0.4deg)' },
          '60%': { transform: 'translateX(-1px)' },
          '80%': { transform: 'translateX(1px)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)', opacity: '0.95' },
          '25%': { transform: 'scaleY(1.15) scaleX(0.92)', opacity: '1' },
          '50%': { transform: 'scaleY(0.9) scaleX(1.05)', opacity: '0.85' },
          '75%': { transform: 'scaleY(1.08) scaleX(0.96)', opacity: '1' },
        },
        glowpulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        shake: 'shake 0.35s ease-in-out infinite',
        flicker: 'flicker 0.9s ease-in-out infinite',
        glowpulse: 'glowpulse 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
