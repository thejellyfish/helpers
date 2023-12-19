const { _pick } = require('../..');

const data = {
  firstname: 'John',
  lastname: 'Doe',
  address: {
    street: 'lorem ipsum',
  },
  country: {
    label: 'Algeria',
    code: 'dz',
  },
  payload: {
    results: {
      hits: [1, 2, 3],
    },
  },
};

// Start tests ...
/* eslint-disable no-undef */
describe('_pick', () => {
  it('expect pick some paths from  object', () => {
    expect(_pick(data, ['firstname', 'lastname'])).toEqual({ firstname: 'John', lastname: 'Doe' });
    expect(_pick(data, ['country.label'])).toEqual({ country: { label: 'Algeria' } });
  });
});
