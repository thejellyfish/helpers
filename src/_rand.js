//-------
// Random between to min and max
//-------
module.exports = function (min, max) {
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
};
