const { _reduce } = require('../..');

const data = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

// Start tests ...
/* eslint-disable no-undef */
describe('_reduce', () => {
  it('expect sum while reducing', () => {
    const sum = _reduce(data, (acc, item) => acc + item, 0);
    const concat = _reduce(data, (acc, item) => acc.concat(item), []);
    const string = _reduce(data, (acc, item) => acc.concat(item), '');
    const keys = _reduce(data, (acc, item, key) => acc.concat(key), '');

    expect(sum).toBe(15);
    expect(concat).toStrictEqual([1, 2, 3, 4, 5]);
    expect(string).toBe('12345');
    expect(keys).toBe('abcde');
  });
});
