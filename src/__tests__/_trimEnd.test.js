const { _trimEnd } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_trimEnd', () => {
  it('expect trim chars from string', () => {
    expect(_trimEnd('jellyfish')).toBe('jellyfish');
    expect(_trimEnd('jellyfish  ')).toBe('jellyfish');
    expect(_trimEnd('jellyfish (*_*)  ', ' (*_)')).toBe('jellyfish');
  });

  it('expect identical string while trim chars from string', () => {
    expect(_trimEnd('- jellyfish -')).toBe('- jellyfish -');
    expect(_trimEnd('- jellyfish -', 'jellyfish')).toBe('- jellyfish -');
    expect(_trimEnd('jellyfish (*_*) ', 'jellyfish')).toBe('jellyfish (*_*) ');
  });
});
