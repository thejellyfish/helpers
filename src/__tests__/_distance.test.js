const { _distance } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_distance', () => {
  it('expect human distance', () => {
    expect(`${_distance(0)}`).toBe('0 m');
    expect(`${_distance(12)}`).toBe('12 m');
    expect(`${_distance(1000)}`).toBe('1 Km');
    expect(`${_distance(1001)}`).toBe('1 Km');
    expect(`${_distance(1230)}`).toBe('1.23 Km');
    expect(`${_distance(1237)}`).toBe('1.24 Km');
    expect(`${_distance(12340)}`).toBe('12.3 Km');
    expect(`${_distance(12370)}`).toBe('12.4 Km');
    expect(`${_distance(123450)}`).toBe('123 Km');
  });

  it('expect human distance rest', () => {
    const {
      value,
      rounded,
      prefix,
      rest,
    } = _distance(123450);

    expect(value).toBe(123.45);
    expect(rounded).toBe(123);
    expect(prefix).toBe('Km');
    expect(rest.value).toBe(450);
    expect(rest.rounded).toBe(450);
    expect(rest.prefix).toBe('m');
  });
});
