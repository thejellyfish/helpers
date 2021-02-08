//-------
// Simpler version of lodash _.map
//-------
module.exports = function (object, iteratee) {
  return Object.keys(object).map(key => iteratee(object[key], key, object));
};
