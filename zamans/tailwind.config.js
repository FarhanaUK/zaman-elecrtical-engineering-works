/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      fontFamily: {
        'arsenal': ['Arsenal SC', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // Make sure to adjust this if you want a full loop effect.
        },
      },
    },
  },
  plugins: [],
}
