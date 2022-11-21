/** @type {import('tailwindcss').Config} */
const primary = '#00ffd0';
const black = '#1a1a1a';
const white = '#fff';

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary,
      green: primary,
      black,
      white,
    },
    extend: {
      fontFamily: {
        sono: ['sono', 'sans-serif'],
        machina: ['pp-neue-machina', 'sans-serif']
      }
    },
  },
  plugins: [],
}
