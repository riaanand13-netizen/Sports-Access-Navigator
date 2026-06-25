/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow', 'Inter', 'sans-serif'],
      },
      colors: {
        'sg-blue':     '#2563EB',
        'sg-blue-dark':'#1D4ED8',
        'sg-blue-darker':'#1E40AF',
        'sg-dark':    '#1A1A1A',
        'sg-gray':    '#6B7280',
        'sg-light':   '#F7F7F7',
        success: {
          50:  '#ECFDF5',
          600: '#059669',
          700: '#065F46',
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.06)',
        'card-lg': '0 4px 24px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
