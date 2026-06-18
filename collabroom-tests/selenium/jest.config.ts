/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 30000,
  testMatch: ['**/tests/**/*.test.ts'],
  reporters: [
    'default',
    './helpers/ExcelReporter.js'
  ],
  setupFilesAfterEnv: ['./jest.setup.ts']
};
