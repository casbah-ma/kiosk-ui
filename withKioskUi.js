const defaultTheme = require("tailwindcss/defaultTheme");
const merge = require("deepmerge");

const kioskUiTailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swiper/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  important: true,
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
      sm: "414px",
      "2xl": "1600px",
    },
    extend: {
      columns: {
        "4xs": "5rem",
      },
      boxShadow: {
        card: "2px 4px 24px 10px rgba(0, 0, 0, 0.04)",
      },
    },
  },
};

function withKioskUi(tailwindConfig) {
  return merge(kioskUiTailwindConfig, { ...tailwindConfig });
}

module.exports = withKioskUi;
