const _weight = require('../_weight');

// Start tests ...
describe('_weight', () => {
  it('expect human weight', () => {
    expect(`${_weight(12)}`).toBe('12 g');
    expect(`${_weight(1000)}`).toBe('1.00 Kg');
    expect(`${_weight(1230)}`).toBe('1.23 Kg');
    expect(`${_weight(12340)}`).toBe('12.3 Kg');
    expect(`${_weight(123450)}`).toBe('123 Kg');
    expect(`${_weight(1234560)}`).toBe('1.23 T');
    expect(`${_weight(12345670)}`).toBe('12.3 T');
    expect(`${_weight(123456780)}`).toBe('123 T');
  });
});
