/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests/**/*.test.ts'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines:95,
      statements:95,
    }
  }
};