//-------
// queryString
//-------
module.exports = function (data) {
  return Object.keys(data).reduce((acc, key) => {
    if (Array.isArray(data[key])) {
      return acc.concat(data[key].map(item => `${encodeURIComponent(key)}[]=${encodeURIComponent(item)}`).join('&'));
    }

    return acc.concat(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
  }, []).join('&');
}
