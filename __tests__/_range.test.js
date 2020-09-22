const { _range } = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('_range', () => {
  it('expect create array 1, 2, 3, 4, 5', () => {
    expect(_range(1, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('expect create array 5, 10, 15, 20, 25', () => {
    expect(_range(5, 25, 5)).toEqual([5, 10, 15, 20, 25]);
    expect(_range(5, 26, 5)).toEqual([5, 10, 15, 20, 25]);
  });
});
