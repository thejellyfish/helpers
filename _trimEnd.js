//-------
// Simpler version of lodash _.trimEnd
//-------
module.exports = function (string, patterns = ' ') {
  // Init vars
  const chars = [...patterns];

  // Reverse string and get first index not includes in pattern letters
  const index = [...string].reverse().findIndex(letter => !chars.includes(letter));

  // Return the substring from index
  return string.substring(0, string.length - index);
};
