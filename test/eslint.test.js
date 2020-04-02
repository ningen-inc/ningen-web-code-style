const { CLIEngine } = require('eslint');

const cli = new CLIEngine({
  useEslintrc: true,
});

test('`npm_scripts/index.es6` errorCount to be 1', () => {
  const report = cli.executeOnFiles(['test/npm_scripts/index.es6']);
  expect(report.errorCount).toBe(1);
});
