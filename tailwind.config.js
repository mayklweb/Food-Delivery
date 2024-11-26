/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E31837',
      },
      animation: {
        "spin-custom": 'spin-custom 1s linear infinite',
      },
      keyframes: {
        'spin-custom': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },

  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('not-last-child', '&:not(:last-child)');
    }),
  ],
}