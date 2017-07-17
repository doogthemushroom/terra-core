/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-onset-picker', done);
  },

  'Displays a default Onset picker': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/onset-picker/default`)
      .assert.elementPresent('.terra-onset');
  },
};
