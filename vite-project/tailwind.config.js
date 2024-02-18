/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Marine-blue': '#02295A', //hsl(213, 96%, 18%)
        'Purplish-blue': '#473DFF', //hsl(243, 100%, 62%)
        'Pastel-blue': '#ADBEFF', //hsl(228, 100%, 84%)
        'Light-blue': '#BFE2FD', //hsl(206, 94%, 87%)
        'Strawberry-red': '#ED3548', //hsl(354, 84%, 57%)
        'Cool-gray': '#9699AB', //hsl(231, 11%, 63%)
        'Light-gray': '#D6D9E6', //hsl(229, 24%, 87%)
        'Magnolia': '#F0F6FF', //hsl(217, 100%, 97%)
        'Alabaster': '#FAFBFF' //hsl(231, 100%, 99%)
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
},
  },
  plugins: [],
}