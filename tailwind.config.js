// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
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
  plugins: [
    flowbite.plugin()
  ],
}

