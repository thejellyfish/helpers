//-------
// Creates a new object populated with the results of iteratee
//-------
module.exports = function (object, iteratee) {
  const result = {};

  Object.keys(object).forEach(key => {
    result[key] = iteratee(object[key], key, object);
  });

  return result;
};
