const _get = require('../_get');

const data = {
  firstname: 'John',
  lastname: 'Doe',
  country : {
    label: 'Algeria',
    code: 'dz',
  },
  payload: {
    results: {
      hits: [1, 2, 3]
    },
  },
};

// Start tests ...
describe('_get', () => {
  it('expect retrieve value of path', () => {
    expect(_get(data, 'firstname')).toBe('John');
    expect(_get(data, 'country.code')).toBe('dz');
    expect(_get(data, 'payload.results.hits')).toStrictEqual([1, 2, 3]);
  });

  it('expect failed to retrieve value of path', () => {
    expect(_get(data, 'prop0')).toBe(undefined);
    expect(_get(data, 'country.label.empty')).toBe(undefined);
  });

  it('expect undefined on failed', () => {
    expect(_get(data, 'prop0')).toBe(undefined);
    expect(_get(data, 'country.label.empty')).toBe(undefined);
    expect(_get(null, 'prop0')).toBe(undefined);
    expect(_get(undefined, 'prop0')).toBe(undefined);
    expect(_get(1, 'prop0')).toBe(undefined);
    expect(_get(false, 'prop0')).toBe(undefined);
    expect(_get(true, 'prop0')).toBe(undefined);
    expect(_get([], 'prop0')).toBe(undefined);
    expect(_get({}, 'prop0')).toBe(undefined);
    expect(_get(() => null, 'prop0')).toBe(undefined);
  });

  it('expect default value on failed', () => {
    expect(_get(data, 'prop0', 'Boom')).toBe('Boom');
    expect(_get(data, 'country.label.empty', 'Boom')).toBe('Boom');
    expect(_get(null, 'prop0', 'Boom')).toBe('Boom');
    expect(_get(undefined, 'prop0', 'Boom')).toBe('Boom');
    expect(_get(1, 'prop0', 'Boom')).toBe('Boom');
    expect(_get(false, 'prop0', 'Boom')).toBe('Boom');
    expect(_get(true, 'prop0', 'Boom')).toBe('Boom');
    expect(_get([], 'prop0', 'Boom')).toBe('Boom');
    expect(_get({}, 'prop0', 'Boom')).toBe('Boom');
    expect(_get(() => null, 'prop0', 'Boom')).toBe('Boom');
  });
});
