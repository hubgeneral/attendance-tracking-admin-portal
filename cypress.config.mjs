import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.ts",
    specPattern: ["cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", "cypress/e2e/**/*.js"],
    env: {
      apiUrl: "https://unprinted-nucleoplasmic-ammie.ngrok-free.dev/graphql/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: ["cypress/component/**/*.cy.{js,jsx,ts,tsx}"],
  },
});
