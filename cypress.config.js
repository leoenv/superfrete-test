const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  e2e: {
    specPattern: 'cypress/e2e',
    baseUrl: 'https://web.superfrete.com/'
  },
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    mode: "test",
    screenshotFolder: 'screenshots',
    videoFolder: 'videos',
    projectCode: 'TEST',
    logging: true,
    basePath: 'https://api.qase.io/v1',
    sendScreenshot: true,
    runComplete: true,
    rootSuiteTitle: 'Cypress Web'
  }
});