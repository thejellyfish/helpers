const { _capitalize } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_capitalize', () => {
  it('expect capitalize sentence', () => {
    const sentence = 'Aurelia aurita also called the common jellyfish, moon jellyfish ...';
    const capitalized = 'Aurelia Aurita Also Called The Common Jellyfish, Moon Jellyfish ...';
    expect(_capitalize(sentence)).toBe(capitalized);
  });
});
