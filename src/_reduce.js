//-------
// Simpler version of lodash _.reduce
//-------
module.exports = function (object, iteratee, accumulator) {
  return Object.keys(object).reduce(
    (acc, key) => iteratee(acc, object[key], key, object),
    accumulator,
  );
};
