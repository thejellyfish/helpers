const { _secureCompare } = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('_secureCompare', () => {
  it('expect equal when same values', () => {
    expect(_secureCompare('sample', 'sample')).toBe(true);
    expect(_secureCompare('&é"123$ù!:', '&é"123$ù!:')).toBe(true);
  });

  it('expect equal when different values', () => {
    expect(_secureCompare('sample', 'boom !')).toBe(false);
    expect(_secureCompare('&é"123$ù!:', '!é"123$ù!:')).toBe(false);
  });

  it('expect not equel when different length', () => {
    expect(_secureCompare('sample', 'sampleZ')).toBe(false);
    expect(_secureCompare('&é"123$ù!:', '&é"123$ù!:Z')).toBe(false);
    expect(_secureCompare('sampleZ', 'sample')).toBe(false);
    expect(_secureCompare('&é"123$ù!:Z', '&é"123$ù!:')).toBe(false);
  });
});
