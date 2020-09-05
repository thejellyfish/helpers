import _set from '../_set';

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
describe('_set', () => {
  it('expect set value in object', () => {
    expect(_set(data, 'firstname', 'thejellyfish').firstname).toBe('thejellyfish');
    expect(_set(data, 'nickname', 'thejellyfish').nickname).toBe('thejellyfish');
    expect(_set(data, 'address.street', 'Boom !').address.street).toBe('Boom !');
  });
});
