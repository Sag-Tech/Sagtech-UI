module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  testMatch: ["**/src/**/*.test.(ts|tsx|js)"],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "identity-obj-proxy",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "\\.(svg)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["./jest.setup.js", "jest-localstorage-mock"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // "\\.(svg)$": "<rootDir>/jest-svg-transformer.js",
  },
  testMatch: ["**/__tests__/**/*.+(ts|tsx)", "**/?(*.)+(spec|test).+(ts|tsx)"],
  collectCoverageFrom: ["src/**/*.(ts|tsx)", "!src/**/*.d.ts"],
  coverageReporters: ["lcov", "text-summary"],
  coverageDirectory: "coverage",
};
