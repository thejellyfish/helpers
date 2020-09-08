//-------
// Return human format of weight
//-------
module.exports = function (weight) {
  // Init
  const result = {
    toString() {
      return `${this.value.toFixed()} ${this.unit}`;
    },
  };
  let nested = result;

  // T ?
  if (weight >= 1000000) {
    nested.value = {
      toString() {
        return Math.floor(weight / 1000000);
      },
      toFixed() {
        // Less than 10 T
        if (weight < 10000000) {
          return (weight / 1000000).toFixed(2);
        }

        // Less than 100 T
        if (weight < 100000000) {
          return (weight / 1000000).toFixed(1);
        }

        // Round value is too big weight
        return Math.round(weight / 1000000);
      },
    };

    nested.unit = 'T';
    nested._chunk = {};
    nested = nested._chunk;
  };

  // Kg ?
  if (weight >= 1000) {
    nested.value = {
      toString() {
        return Math.floor(weight / 1000);
      },
      toFixed() {
        // Less than 10 Kg
        if (weight < 10000) {
          return (weight / 1000).toFixed(2);
        }

        // Less than 100 Kg
        if (weight < 100000) {
          return (weight / 1000).toFixed(1);
        }

        // Round value is too big weight
        return Math.round(weight / 1000);
      },
    };

    nested.unit = 'Kg';
    nested._chunk = {};
    nested = nested._chunk;
  };

  // Add meter
  nested.value = {
    toString() {
      return Math.round(weight % 1000);
    },
    toFixed() {
      return Math.round(weight % 1000);
    },
  };
  nested.unit = 'g';

  return result;
};
