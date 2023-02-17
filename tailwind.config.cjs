/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter-font)", "sans-serif"],
      },
      animation: {
        'grow-x': 'grow-x 1s ease-in-out forwards',
      },
      colors: {
        discord: {
          400: '#7289DA',
          500: '#5865F2',
          600: '#4F5BD5',
          700: '#3639CF',
        }
      },
      keyframes: {
        'grow-x': {
          '0%': {
            transform: 'scaleX(0)',
          },
          '100%': {
            transform: 'scaleX(1)',
          }
        }
      }


    },
  },
  plugins: [],
};
