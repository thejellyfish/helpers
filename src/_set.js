const _isObject = require('./_isObject');

//-------
// Return new object with value at path of object
//-------
module.exports = function (object, path, value) {
  // Parse path
  const keys = path.split('.');
  const last = keys.pop();

  // Init vars
  let nested = object;

  // Set missing attribute in result
  for (let i = 0; i < keys.length; i += 1) {
    if (!_isObject(nested[keys[i]])) {
      nested[keys[i]] = {};
    }

    nested = nested[keys[i]];
  }

  // Set value
  nested[last] = value;

  // Return object
  return object;
};
