const _set = require('../_set');

const data = {
  firstname: 'John',
  lastname: 'Doe',
  address: {
    street: 'lorem ipsum',
  },
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
describe('_set', () => {
  it('expect set value in object', () => {
    expect(_set(data, 'firstname', 'thejellyfish').firstname).toBe('thejellyfish');
    expect(_set(data, 'nickname', 'thejellyfish').nickname).toBe('thejellyfish');
    expect(_set(data, 'address.street', 'Boom !').address.street).toBe('Boom !');
    expect(_set(data, 'level2.level1.level0.label', 'Boom !').level2.level1.level0.label).toBe('Boom !');
  });
});
