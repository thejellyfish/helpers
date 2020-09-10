const { _queryString } = require('..');

// Start tests ...
/* eslint-disable no-undef */
describe('_queryString', () => {
  it('expect queryString of params', () => {
    // Init params
    const params = {
      firstname: 'John',
      lastname: 'Doe',
      categories: ['one', 'two', 'three'],
    };

    // Init expected result
    const result = 'firstname=John&lastname=Doe&categories[]=one&categories[]=two&categories[]=three';

    // Test
    expect(_queryString(params)).toBe(result);
  });
});
