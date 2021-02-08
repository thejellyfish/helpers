const { _isObject } = require('../..');

// Start tests ...
/* eslint-disable no-undef, no-new-object, prefer-arrow-callback, space-before-function-paren */
describe('_isObject', () => {
  it('expect object', () => {
    expect(_isObject({})).toBe(true);
    // eslint-disable-next-line no-new-object
    expect(_isObject(new Object())).toBe(true);
    expect(_isObject([1, 2, 3])).toBe(true);
    expect(_isObject(function() {})).toBe(true);
  });

  it('expect not object', () => {
    expect(_isObject()).toBe(false);
    expect(_isObject(false)).toBe(false);
    expect(_isObject(true)).toBe(false);
    expect(_isObject(null)).toBe(false);
    expect(_isObject('boom')).toBe(false);
    expect(_isObject(123)).toBe(false);
  });
});
