const _round = require('./_round');

//-------
// Return human format of distance
//-------
module.exports = function (distance) {
  // Init
  const result = {};
  let nested = result;

  // Km ?
  if (distance >= 1000) {
    // Get precision
    let precision = 0;

    // Less than 10 Kilometers
    if (distance < 10000) {
      precision = 2;

    // Less than 100 Kilometers
    } else if (distance < 100000) {
      precision = 1;
    }

    // Populate values
    nested.prefix = 'Km';
    nested.value = distance / 1000;
    nested.rounded = _round(distance / 1000, precision);
    nested.rest = {};
    nested.toString = function () {
      return `${this.rounded} ${this.prefix}`;
    };

    nested = nested.rest;
  }

  // Add meter
  nested.prefix = 'm';
  nested.value = distance % 1000;
  nested.rounded = Math.round(distance % 1000);
  nested.toString = function () {
    return `${this.rounded} ${this.prefix}`;
  };

  // Delete rest prop of deepest obj
  delete nested.rest;

  return result;
};
