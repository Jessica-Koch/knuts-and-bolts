module.exports = {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testEnvironment": "node",
    "coverageReporters": [
      "text",
      "html"
    ],
    "globals": {
      "ts-jest": {
        "tsConfigFile": "tsconfig.json",
        "enableTsDiagnostics": true
      }
    },
    "roots": [
        "<rootDir>/src"
      ],
    "testRegex": "\\.test\\.(js?|ts?)$",
    "moduleFileExtensions": [
      "ts",
      "js"
    ]
  }