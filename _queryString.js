const _reduce = require('./_reduce');

//-------
// queryString
//-------
module.exports = function (data) {
  return _reduce(data, (acc, item, key) => (
    Array.isArray(item)
      ? acc.concat(item.map(item => `${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`).join('&'))
      : acc.concat(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`)
  ), []).join('&');
}
