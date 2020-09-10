const { _deburr } = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('_deburr', () => {
  it('expect remove accents', () => {
    const sentence = 'éàçèÉÀÇÈ';
    const deburrd = 'eaceEACE';
    expect(_deburr(sentence)).toBe(deburrd);
  });
});
