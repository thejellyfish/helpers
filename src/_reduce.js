//-------
// Reducer function on each element
//-------
module.exports = function (object, iteratee, accumulator) {
  return Object.keys(object).reduce(
    (acc, key) => iteratee(acc, object[key], key, object),
    accumulator,
  );
};
