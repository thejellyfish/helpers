const _duration = require('../_duration');

// Start tests ...
describe('_duration', () => {
  it('expect human duration', () => {
    expect(`${_duration(12)}`).toBe('12 sec');
    expect(`${_duration(120)}`).toBe('2 min et 0 sec');
    expect(`${_duration(121)}`).toBe('2 min et 1 sec');
    expect(`${_duration(3600)}`).toBe('1 h et 0 min');
    expect(`${_duration(3660)}`).toBe('1 h et 1 min');
    expect(`${_duration(123456)}`).toBe('1 j et 10 h');
  });
});
