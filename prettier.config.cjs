/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  trailingComma: "es5",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
};

module.exports = config;
