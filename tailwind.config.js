/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "500px",
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        "regal-blue": "red",
      },
    },
  },
  plugins: [],
};
