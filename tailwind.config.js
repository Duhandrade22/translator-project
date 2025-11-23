/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        slate: {
          600: "#4D5562",
          400: "#D2D5DA",
          900: "#394150",
          950: "#212936CC",
        },
        background: {
          light: "#F9FAFB",
          dark: "#040711",
          overlay: "#121826CC",
          card: "#212936CC",
        },
        primary: {
          DEFAULT: "#263FA9",
          light: "#7CA9F3",
        },
      },
    },
  },
  plugins: [],
};
