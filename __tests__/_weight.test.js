const _weight = require('../_weight');

// Start tests ...
describe('_weight', () => {
  it('expect human weight', () => {
    expect(`${_weight(0)}`).toBe('0 g');
    expect(`${_weight(12)}`).toBe('12 g');
    expect(`${_weight(1000)}`).toBe('1 Kg');
    expect(`${_weight(1001)}`).toBe('1 Kg');
    expect(`${_weight(1230)}`).toBe('1.25 Kg');
    expect(`${_weight(12340)}`).toBe('12.3 Kg');
    expect(`${_weight(123450)}`).toBe('123 Kg');
  });

  it('expect human weight rest', () => {
    const { _value, _rounded, _prefix, _rest } = _weight(123450);

    expect(_value).toBe(123.45);
    expect(_rounded).toBe(123);
    expect(_prefix).toBe('Kg');
    expect(_rest._value).toBe(450);
    expect(_rest._rounded).toBe(450);
    expect(_rest._prefix).toBe('g');
  });
});
