const _isObject = require('./_isObject');

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
  for (let i = 0; i < keys.length; i += 1) {
    if (!_isObject(nested[keys[i]])) {
      nested[keys[i]] = {};
    }

    nested = nested[keys[i]];
  }

  // Set value
  nested[last] = value;

  // Return result
  return result;
};
