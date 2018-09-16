module.exports = {
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'json', 'lcov', 'text'],
  moduleFileExtensions: ['ts', 'js'],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
  testRegex: '\\.test\\.ts$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
