//-------
// random between to value
//-------
module.exports = function (min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};
