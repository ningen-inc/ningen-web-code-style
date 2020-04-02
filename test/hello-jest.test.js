// https://jestjs.io/docs/ja/getting-started
const { sum } = require('./hello-jest.es6');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
