/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "#e4e4e7",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        grey: "rgba(226, 232, 240, 0.5)",
      },
      fontFamily: {
        bSans: ["Basic Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "300px",
      ss: "580px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1600px",
      xxl: "2100px",
    },
  },
  plugins: [],
};

