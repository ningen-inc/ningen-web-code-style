/* eslint-disable no-undef */
const { CLIEngine } = require("eslint");

const cli = new CLIEngine({
  useEslintrc: true,
});

test("`npm_scripts/index.js` errorCount to be 1", () => {
  const report = cli.executeOnFiles(["test/npm_scripts/index.js"]);
  expect(report.errorCount).toBe(1);
});
