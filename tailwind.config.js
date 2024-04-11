/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "mainFont":"Orbitron"
      },
      backgroundImage:{
        "heroPattern":"url('public/hero-background.jpeg')"
      }
    },
  },
  plugins: [],
}

