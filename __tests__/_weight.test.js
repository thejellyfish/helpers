const { _weight } = require('..');

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
    const { value, rounded, prefix, rest } = _weight(123450);

    expect(value).toBe(123.45);
    expect(rounded).toBe(123);
    expect(prefix).toBe('Kg');
    expect(`${rest}`).toBe('450 g');
    expect(rest.value).toBe(450);
    expect(rest.rounded).toBe(450);
    expect(rest.prefix).toBe('g');
  });
});
