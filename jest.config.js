const commonConfig = require("@darekkay/scripts/src/config/jest.config");

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  ...commonConfig,

  preset: "ts-jest",

  coverageThreshold: {
    global: {
      statements: 85,
      branches: 85,
      functions: 85,
      lines: 85,
    },
  },

  coveragePathIgnorePatterns: [
    ...commonConfig.coveragePathIgnorePatterns,

    "src/index.ts",
    "src/testing.tsx",
    "src/setupTests.ts",
  ],
};
