const withKioskUi = require("./withKioskUi");
module.exports = withKioskUi({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  plugins: [require("tailwind-scrollbar-hide")],
});
