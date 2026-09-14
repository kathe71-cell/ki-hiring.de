/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          50: '#fafafa',
          100: '#f5f5f7',
          200: '#e5e7eb',
        },
        slate: {
          850: '#111c30',
          950: '#030712',
        },
        amber: {
          450: '#f59e0b',
          550: '#d97706',
        },
        emerald: {
          550: '#059669',
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ]
      }
    },
  },
  plugins: [],
}
