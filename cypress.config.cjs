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

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:5173',
    },
});
