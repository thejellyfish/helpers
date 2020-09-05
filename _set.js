//-------
// Simpler version of lodash _.set
//-------
export default function (object, path, value) {
  // Parse path
  const keys = path.split('.');
  const length = keys.length - 1;

  // Copy object
  const target = { ...object };
  let nested = target;
  let index = 0;

  // Set missing attribute in target
  while (index < length) {
    if (!nested[keys[index]]) {
      nested[keys[index]] = {};
    }

    nested = nested[keys[index]];
    index += 1;
  }

  // Set value
  nested[keys[keys.length - 1]] = value;

  // Merge results
  return Object.assign({}, object, target);
}
