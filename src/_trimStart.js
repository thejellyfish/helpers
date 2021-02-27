//-------
// Removes trailing whitespace or specified characters
//-------
module.exports = function (string, patterns = ' ') {
  // Init vars
  const chars = [...patterns];

  // Get first index not includes in pattern letters
  const index = [...string].findIndex(letter => !chars.includes(letter));

  // Return the substring from index
  return string.substring(index);
};
