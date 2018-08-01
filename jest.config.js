module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  collectCoverage: true,
  coverageDirectory: './coverage',
  testEnvironment: "node",
  coverageReporters: ["html","json", "lcov", "text"],
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
      enableTsDiagnostics: true
    }
  },
  roots: ["<rootDir>/src"],
  testRegex: "\\.test\\.(js?|ts?)$",
  moduleFileExtensions: ["ts", "js"]
};
