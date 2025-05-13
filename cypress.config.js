const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // You can add event listeners here if needed
    },
    specPattern: "cypress/e2e/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
  },
  video: true,                   // ✔️ Video recording is ON
  screenshotOnRunFailure: true, // ✔️ Screenshot on failure is ON
  videosFolder: 'cypress/videos', // Custom folder for video recordings
  screenshotsFolder: 'cypress/screenshots', // Custom folder for screenshots
});
