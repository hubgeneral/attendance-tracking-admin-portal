const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Vite default dev server port
    supportFile: "cypress/support/e2e.ts",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});