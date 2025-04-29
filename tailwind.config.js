/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Primary" : "#FFFFFF",
        "Secondary" : "#DCDCDC",
        "Tertiary" : "#800020",

        "PText" : "#0b0b0b",
        "SText" : "#d3d3d3",
        "TText" : "#800020",
      }
    },
  },
  plugins: [],
}

