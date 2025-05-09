const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com", // ⬅️ Base URL to avoid repeating in tests
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.spec.js", // ⬅️ Where Cypress looks for test files
    supportFile: "cypress/support/e2e.js", // ⬅️ Cypress loads this before each test
  },
});
