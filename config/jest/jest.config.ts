/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
  globals: {
    __IS_DEV__: true
  },
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleDirectories: [
    'node_modules'
  ],
  rootDir: '../../',
  modulePaths: [
    '<rootDir>src'
  ],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  setupFilesAfterEnv: [
    '<rootDir>config/jest/setupTests.ts'
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg$': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^entities/(.*)$': '<rootDir>src/entities/$1',
    '^features/(.*)$': '<rootDir>src/features/$1',
    '^widgets/(.*)$': '<rootDir>src/widgets/$1',
    '^shared/(.*)$': '<rootDir>src/shared/$1'
  }
};
