const _round = require('./_round');

//-------
// Return human format of weight
//-------
module.exports = function (weight) {
  // Init
  const result = {};
  let nested = result;


  // T ?
  if (weight >= 1000000) {
    // Get precision
    let precision = 0;

    // Less than 10 T
    if (weight < 10000000) {
      precision = 2;

    // Less than 100 T
    } else if (weight < 100000000) {
      precision = 1;
    }

    // Populate values
    nested.prefix = 'T';
    nested.value = weight / 1000000;
    nested.rounded = _round(weight / 1000000, precision);
    nested.toString = function() { return `${this.rounded} ${this.prefix}`; };
    nested.rest = {};

    nested = nested.rest;
  }

  // Kg ?
  if (weight >= 1000) {
    // Get precision
    let precision = 0;

    // Less than 10 Kilometers
    if (weight < 10000) {
      precision = 2;

    // Less than 100 Kilometers
    } else if (weight < 100000) {
      precision = 1;
    }

    // Populate values
    nested.prefix = 'Kg';
    nested.value = weight / 1000;
    nested.rounded = _round(weight / 1000, precision);
    nested.toString = function() { return `${this.rounded} ${this.prefix}`; };
    nested.rest = {};

    nested = nested.rest;
  }

  // Add gramm
  nested.prefix = 'g';
  nested.value = weight % 1000;
  nested.rounded = Math.round(weight % 1000);
  nested.toString = function() { return `${this.rounded} ${this.prefix}`; };
  delete nested.rest;

  return result;
};
