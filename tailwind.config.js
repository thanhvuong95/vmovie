module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondary: ["Water Brush", "cursive"],
      },
      maxWidth: {
        1200: "1200px",
      },
      colors: {
        backgroundHeader: "#673ab7",
        backgroundHeaderLight: "#7443c7",
        backgroundDark: "#181c24",
        backgroundLight: "#232834",
        textPrimary: "#fff",
        backgroundYellow: "#ffb850",
        yellow: "#ffb850",
      },
      spacing: {
        200: "200px",
      },
    },
  },
  plugins: [],
};
