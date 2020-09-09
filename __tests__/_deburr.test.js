const { _deburr } = require('..');

// Start tests ...
describe('_deburr', () => {
  it('expect remove accents', () => {
    const sentence = 'éàçèÉÀÇÈ';
    const deburrd = 'eaceEACE';
    expect(_deburr(sentence)).toBe(deburrd);
  });
});
