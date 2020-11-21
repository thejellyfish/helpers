const _get = require('./_get');

//-------
// Keep unique in array
//-------
module.exports = function (items, path) {
  return [...new Map(items.map(item => [_get(item, path), item])).values()];
};
