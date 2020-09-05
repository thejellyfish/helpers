//-------
// Simpler version of lodash _.get
//-------
export default function (object, path, defaultValue) {
  const keys = path.split('.');
  let target = { ...object };
  let index = 0;

  while (target && index < keys.length) {
    target = target[keys[index]];
    index += 1;
  }

  return target !== undefined && index === keys.length ? target : defaultValue;
}
