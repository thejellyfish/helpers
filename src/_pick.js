import _get from './_get';
import _set from './_set';

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
