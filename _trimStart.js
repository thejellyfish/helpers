//-------
// Simpler version of lodash _.trimStart
//-------
module.exports = function (string, patterns = ' ') {
  // Init vars
  const chars = [...patterns];

  // Get index to slice string
  const index = [...string].findIndex(letter => !chars.includes(letter));

  if (index !== -1) {
    return string.substring(index);
  }

  return string;
};
