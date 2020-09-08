const _distance = require('../_distance');

// Start tests ...
describe('_distance', () => {
  it('expect human distance', () => {
    expect(`${_distance(0)}`).toBe('0 m');
    expect(`${_distance(12)}`).toBe('12 m');
    expect(`${_distance(1000)}`).toBe('1 Km');
    expect(`${_distance(1001)}`).toBe('1 Km');
    expect(`${_distance(1230)}`).toBe('1.25 Km');
    expect(`${_distance(12340)}`).toBe('12.3 Km');
    expect(`${_distance(123450)}`).toBe('123 Km');
  });

  it('expect human distance rest', () => {
    const { _value, _rounded, _prefix, _rest } = _distance(123450);

    expect(_value).toBe(123.45);
    expect(_rounded).toBe(123);
    expect(_prefix).toBe('Km');
    expect(_rest._value).toBe(450);
    expect(_rest._rounded).toBe(450);
    expect(_rest._prefix).toBe('m');
  });
});
