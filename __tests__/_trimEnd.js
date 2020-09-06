import _trimEnd from '../_trimEnd';

// Start tests ...
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
