module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/node_modules/"],
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: { "\\.[jt]sx?$": "babel-jest" },
};
