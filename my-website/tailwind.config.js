/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      sm: "16px",
      base: "18px",
      medium: "24px",
      xl: "29px",
      "2xl": "30px",
      "3xl": "36px",
      "4xl": "42px",
      "5xl": "48px",
    },
    fontFamily: {
      inter: ["Inter"],
      playfair: ["Playfair Display", "serif"],
    },
    backgroundImage: {
      pcImg: "url('./pc-img.png')",
    },
  },
  plugins: [],
};
