// const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./public/**/*.html",
    "./packages/*/**/*.{js,jsx,ts,tsx,vue,mdx}",
    "./.storybook/stories/**/*.{js,jsx,ts,tsx,vue,mdx}",
    "./.storybook/components/**/*.{js,jsx,ts,tsx,vue,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("./packages/core")({
      colors: [],
      cssBase: true
    }),
  ],
};
