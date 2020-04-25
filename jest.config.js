module.exports = {
  rootDir: __dirname,
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/ui-kit/src/**/*.{ts,tsx}',
    '!**/*.{test,spec}.{ts,tsx}',
    '!**/*.stories.{ts,tsx}',
  ],
  projects: ['<rootDir>/packages/*/jest.config.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  watchPlugins: [
    'jest-watch-continue',
    'jest-watch-lerna-packages',
    'jest-watch-master',
    'jest-watch-suspend',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-yarn-workspaces',
  ],
};
