const cypress = require('cypress');

module.exports = cypress.defineConfig({
    // numTestsKeptInMemory: 0,
    env: {
        uncaughtCypressException: false,
        hideXhr: true,
    },

    chromeWebSecurity: false,

    retries: {
        runMode: 1,
        openMode: 0,
    },

    // blockHosts: ['!*localhost*'],
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
        specPattern: 'src/**/*.test.tsx',
        viewportWidth: 680,
        viewportHeight: 768,
    },

    projectId: process.env.CYPRESS_PROJECT_ID,

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:5173',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    },
});
