//-------
// Simpler version of lodash _.set
//-------
module.exports = function (object, path, value) {
  // Parse path
  const keys = path.split('.');
  const last = keys.pop();

  // Copy object
  const result = { ...object };
  let nested = result;

  // Set missing attribute in result
  keys.forEach(key => {
    if (!nested[key]) {
      nested[key] = {};
    }

    nested = nested[key];
  });

  // Set value
  nested[last] = value;

  // Return result
  return result;
}
