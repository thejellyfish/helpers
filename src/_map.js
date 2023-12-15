//-------
// Creates a new object populated with the results of iteratee
//-------
module.exports = function (object, iteratee) {
  return Object.keys(object).map(key => iteratee(object[key], key, object));
};
