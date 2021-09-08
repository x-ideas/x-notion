module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "promise", "prettier"],
  rules: {
    "node/no-unsupported-features/es-syntax": "off",
    "node/no-unpublished-import": "off",
  },
};
