/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
      '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'node',
  ],
  moduleDirectories: [
      'node_modules',
  ],
  testMatch: [
      // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
      '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
};

module.exports = config;
