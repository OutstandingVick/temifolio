/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poetsen: ['Poetsen One', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        nunito: ['Nunito', 'serif'],
      },
    },
  },
  plugins: [],
};
