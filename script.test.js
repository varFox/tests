const scripts = require('./script');
import toBeType from "jest-tobetype";
expect.extend(toBeType);

test('sum(2, 2)', () => {
  expect(scripts.sum(2, 2)).toBe(false);
});

test('arr[1][1] = 5', () => {
  expect(scripts.num).toBe(5);
});

test('each(arr2, myFunc)', () => {
  expect(scripts.each.each(scripts.each.arr2, scripts.each.myFunc)).toBeType('array');
});
// test('sum(2, 2)', () => {
//   expect(sum(2, 2)).toBe(false);
// });