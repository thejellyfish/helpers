const { _round } = require('..');

// Start tests ...
describe('_round', () => {
  it('expect round value', () => {
    const value = 3.14159265359;
    expect(_round(value)).toBe(3);
    expect(_round(value, 1)).toBe(3.1);
    expect(_round(value, 2)).toBe(3.14);
    expect(_round(value, 3)).toBe(3.142);
    expect(_round(value, 4)).toBe(3.1416);
  });
});
