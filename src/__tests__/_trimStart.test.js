const { _trimStart } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_trimStart', () => {
  it('expect trim chars from string', () => {
    expect(_trimStart('jellyfish')).toBe('jellyfish');
    expect(_trimStart('  jellyfish')).toBe('jellyfish');
    expect(_trimStart(' (*_*)  jellyfish', ' (*_)')).toBe('jellyfish');
  });

  it('expect identical string while trim chars from string', () => {
    expect(_trimStart('- jellyfish -')).toBe('- jellyfish -');
    expect(_trimStart('- jellyfish -', 'jellyfish')).toBe('- jellyfish -');
    expect(_trimStart(' (*_*) jellyfish', 'jellyfish')).toBe(' (*_*) jellyfish');
  });
});
