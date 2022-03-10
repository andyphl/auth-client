module.exports = {
  content: ["index.html", "src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#26c6da",
          light: "#6ff9ff",
          dark: "#0095a8",
        },
        secondary: {
          base: "#ffd54f",
          light: "#ffffe5",
          dark: "#cbba83",
        },
        gray: {
          base: "#455a64",
          light: "#718792",
          dark: "#1c313a",
        },
      },
    },
  },
  plugins: [],
};
