const _get = require('./_get');
const _set = require('./_set');

//-------
// Pick attributes
//-------
module.exports = function (object, paths) {
  const result = {};

  for (let i = 0; i < paths.length; i += 1) {
    _set(result, paths[i], _get(object, paths[i]));
  }

  return result;
};
