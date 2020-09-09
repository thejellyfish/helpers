const { _capitalize } = require('..');

// Start tests ...
describe('_capitalize', () => {
  it('expect capitalize sentence', () => {
    const sentence = 'Aurelia aurita also called the common jellyfish, moon jellyfish ...';
    const capitalized = 'Aurelia Aurita Also Called The Common Jellyfish, Moon Jellyfish ...';
    expect(_capitalize(sentence)).toBe(capitalized);
  });
});
