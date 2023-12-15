//-------
// Is object ?
//-------
module.exports = function (obj) {
  return obj === Object(obj);

  // const type = typeof value;
  // return value != null && (type === 'object' || type === 'function');
};
