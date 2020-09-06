//-------
// Simpler version of lodash _.trimEnd
//-------
module.exports = function (string, patterns = ' ') {
  // Init vars
  const chars = [...patterns];

  // Get index to slice string
  const index = [...string].reverse().findIndex(letter => !chars.includes(letter));

  if (index !== -1) {
    return string.substring(0, string.length - index);
  }

  return string;
};
