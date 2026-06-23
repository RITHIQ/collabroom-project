exports.config = {
    runner: 'local', specs: ['./tests/**/*.js'], maxInstances: 1,
    capabilities: [{ platformName: 'Android', 'appium:automationName': 'UiAutomator2', 'appium:app': 'mock' }],
    logLevel: 'error', framework: 'mocha', mochaOpts: { ui: 'bdd', timeout: 60000 }
  };