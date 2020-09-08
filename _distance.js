//-------
// Return human format of distance
//-------
module.exports = function (distance) {
  // Init
  const result = {
    toString() {
      return `${this._rounded} ${this._prefix}`;
    },
  };
  let nested = result;

  // Km ?
  if (distance >= 1000) {
    // Get precision
    let precision = 0.1;

    // Less than 10 Kilometers
    if (distance < 10000) {
      precision = 2;

    // Less than 100 Kilometers
    } else if (distance < 100000) {
      precision = 1;
    }

    // Populate values
    nested._prefix = 'Km';
    nested._value = distance / 1000;
    nested._rounded = Math.round(distance / 1000 * 10 * precision) / (10 * precision);
    nested._rest = {};

    nested = nested._rest;
  }

  // Add meter
  nested._prefix = 'm';
  nested._value = distance % 1000;
  nested._rounded = Math.round(distance % 1000);

  return result;
};
