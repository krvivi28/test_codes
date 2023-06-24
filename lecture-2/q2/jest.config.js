module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    transform: {
      '^.+\\.m?js$': 'babel-jest',
    },
 
    clearMocks: true,
    setupFilesAfterEnv: ['regenerator-runtime/runtime'],
    testPathIgnorePatterns: [
        "/node_modules/",
    ],
    testResultsProcessor: "<rootDir>/custom-reporter",
    moduleFileExtensions: ['mjs', 'js'],
  };
  