/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: {
          100: '#fcf6ba',
          200: '#f9f0a0',
          300: '#f7ea85',
          400: '#f4e46b',
          500: '#f1de50',
          600: '#d4a017',
          700: '#aa771c',
          800: '#805c14',
          900: '#55400e',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};