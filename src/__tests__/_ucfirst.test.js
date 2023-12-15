const { _ucfirst } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_ucfirst', () => {
  it('expect uppercase first letter', () => {
    expect(_ucfirst('jellyfish')).toBe('Jellyfish');
    expect(_ucfirst('JELLYFISH')).toBe('Jellyfish');
    expect(_ucfirst('Jellyfish')).toBe('Jellyfish');
    expect(_ucfirst('jellyFish')).toBe('Jellyfish');
  });
});
