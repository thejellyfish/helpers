//-------
// Return human format of weight
//-------
module.exports = function (weight) {
  // Init
  const result = {
    toString() {
      return `${this._rounded} ${this._prefix}`;
    },
  };
  let nested = result;


  // T ?
  if (weight >= 1000000) {
    // Get precision
    let precision = 0.1;

    // Less than 10 T
    if (weight < 10000000) {
      precision = 2;

    // Less than 100 T
    } else if (weight < 100000000) {
      precision = 1;
    }

    // Populate values
    nested._prefix = 'T';
    nested._value = weight / 1000000;
    nested._rounded = Math.round(weight / 1000000 * 10 * precision) / (10 * precision);
    nested._rest = {};

    nested = nested._rest;
  }

  // Kg ?
  if (weight >= 1000) {
    // Get precision
    let precision = 0.1;

    // Less than 10 Kilometers
    if (weight < 10000) {
      precision = 2;

    // Less than 100 Kilometers
    } else if (weight < 100000) {
      precision = 1;
    }

    // Populate values
    nested._prefix = 'Kg';
    nested._value = weight / 1000;
    nested._rounded = Math.round(weight / 1000 * 10 * precision) / (10 * precision);
    nested._rest = {};

    nested = nested._rest;
  }

  // Add gramm
  nested._prefix = 'g';
  nested._value = weight % 1000;
  nested._rounded = Math.round(weight % 1000);

  return result;
};
