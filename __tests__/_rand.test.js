const { _rand } = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('_rand', () => {
  it('expect random value between 0 & 10', () => {
    for (let i = 0; i < 250; i += 1) {
      const value = _rand(0, 10);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(10);
    }
  });

  it('expect random value between 10 & 100', () => {
    for (let i = 0; i < 250; i += 1) {
      const value = _rand(10, 100);
      expect(value).toBeGreaterThanOrEqual(10);
      expect(value).toBeLessThanOrEqual(100);
    }
  });
});
