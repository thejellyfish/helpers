const _distance = require('../_distance');

// Start tests ...
describe('_distance', () => {
  it('expect human distance', () => {
    expect(`${_distance(12)}`).toBe('12 m');
    expect(`${_distance(1000)}`).toBe('1.00 Km');
    expect(`${_distance(1230)}`).toBe('1.23 Km');
    expect(`${_distance(12340)}`).toBe('12.3 Km');
    expect(`${_distance(123450)}`).toBe('123 Km');
  });
});
