//-------
// Remove accents in string
//-------
module.exports = function (str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};
