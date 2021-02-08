const _reduce = require('./_reduce');

//-------
// queryString
//-------
module.exports = function (data) {
  return _reduce(data, (acc, item, key) => acc.concat(
    Array.isArray(item)
      ? item.map(elem => `${encodeURIComponent(key)}[]=${encodeURIComponent(elem)}`).join('&')
      : `${encodeURIComponent(key)}=${encodeURIComponent(item)}`
  ), []).join('&');
};
