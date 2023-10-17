module.exports = {
  blackHosts: '*:35729',
  fixturesFolder: 'test/e2e/fixtures',
  screenshotsFolder: 'test/e2e/screenshots',
  videosFolder: 'test/e2e/videos',
  video: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./test/e2e/plugins/index.js')(on, config)
    },
    specPattern: 'test/e2e/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'test/e2e/support/index.js',
    baseUrl: 'http://localhost:4000',
  },
}
