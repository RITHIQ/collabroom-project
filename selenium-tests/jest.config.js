// c:\Users\then9\Downloads\PROJECT PDD\selenium-tests\jest.config.js
module.exports = {
  testEnvironment: 'node',
  testTimeout: 30000,
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: '.',
      outputName: 'selenium-results.xml',
    }]
  ]
};
