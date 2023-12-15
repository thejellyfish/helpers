const { _duration } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_duration', () => {
  it('expect human duration', () => {
    expect(`${_duration(12)}`).toBe('12 seconds');
    expect(`${_duration(120)}`).toBe('2 minutes');
    expect(`${_duration(121)}`).toBe('2 minutes and 1 seconds');
    expect(`${_duration(3600)}`).toBe('1 hours');
    expect(`${_duration(3660)}`).toBe('1 hours and 1 minutes');
    expect(`${_duration(123456)}`).toBe('1 days and 10 hours');
  });
});
