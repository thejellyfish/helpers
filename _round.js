//-------
// Round value
//-------
module.exports = function (value, digits = 0) {
  const coeff = 10 ** digits;
  return Math.round(value * coeff) / coeff;
};
