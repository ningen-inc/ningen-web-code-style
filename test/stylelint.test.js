/* eslint-disable no-undef */
const stylelint = require('stylelint');

// なんか時間がかかるから
jest.setTimeout(20 * 1000);
test('`npm_scripts/index.scss` errored to be true', () => {
  const files = 'test/npm_scripts/index.scss';
  return stylelint.lint({ files }).then((resultObject) => {
    expect(resultObject.errored).toBe(true);
  });
});
