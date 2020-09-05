//-------
// Capitalize each words
//-------
module.exports = function (str) {
  return str.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
}
