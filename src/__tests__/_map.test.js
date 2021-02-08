const { _map } = require('../..');

const data = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
};

// Start tests ...
/* eslint-disable no-undef */
describe('_map', () => {
  it('expect increment while map', () => {
    const result = _map(data, item => item + 1);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
