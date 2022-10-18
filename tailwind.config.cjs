/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primary: '#EDE4E0',
        secondary: '#C8DBBE',
        tertiary: "#9F8772",
        quaternary: "#665A48",

      }
    },
  },
  plugins: [],
}
