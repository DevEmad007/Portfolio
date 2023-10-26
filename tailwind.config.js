/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        '26': '6.5rem'
      },
      colors: {
        redis: '#f58'
      },
      backgroundImage: {
        header: 'linear-gradient(to right, #370537, #6d0244, #a20f44, #ce3635, #eb6612)'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '6/4': '6/4',
      },
      gridTemplateColumns: {
        '80/20': '80% 20%'
      },
      rotate: {
        '225': '225deg',
      },
    },
  },
  plugins: [],
};