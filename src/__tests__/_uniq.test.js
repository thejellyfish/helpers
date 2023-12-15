const { _uniq } = require('../..');

// Start tests ...
/* eslint-disable no-undef */
describe('_uniq', () => {
  it('expect remove dublicate', () => {
    const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }, { id: 1 }, { id: 2 }];
    expect(_uniq(items, 'id').length).toBe(3);
  });

  it('expect remove dublicate', () => {
    const items = [
      { data: { id: 1 } },
      { data: { id: 2 } },
      { data: { id: 3 } },
      { data: { id: 1 } },
      { data: { id: 1 } },
      { data: { id: 2 } },
    ];
    expect(_uniq(items, 'data.id').length).toBe(3);
  });
});
