module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["airbnb-base", "prettier", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  rules: {
    "no-console": 0,
    "arrow-parens": ["error", "always"],
    yoda: [
      "error",
      "never",
      {
        exceptRange: true,
      },
    ],
    "import/prefer-default-export": 0,
    "func-names": 0,
    "no-param-reassign": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
  },
};
