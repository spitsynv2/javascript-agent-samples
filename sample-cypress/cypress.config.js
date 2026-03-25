const { defineConfig } = require('cypress');
const zbrPlugin = require('@zebrunner/javascript-agent-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@zebrunner/javascript-agent-cypress',
  reporterOptions: {
    reportingServerHostname: 'https://<workspace>.zebrunner.com/',
    reportingServerAccessToken: '<accessToken>',
    reportingProjectKey: '<project_key>',
    reportingRunEnvironment: 'DEMO',
    reportingRunBuild: '2.41.2.2431-SNAPSHOT',
    reportingRunDisplayName: 'Cypress Demo Launch',
  },
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.js',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      zbrPlugin(on, config);
    },
  },
});
