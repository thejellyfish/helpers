//-------
// Return human format of distance
//-------
module.exports = function (distance) {
  // Init
  const result = {
    toString() {
      return `${this.value.toFixed()} ${this.unit}`;
    },
  };
  let nested = result;

  // Km ?
  if (distance >= 1000) {
    nested.value = {
      toString() {
        return Math.floor(distance / 1000);
      },
      toFixed() {
        // Less than 10 Kilometers
        if (distance < 10000) {
          return (distance / 1000).toFixed(2);
        }

        // Less than 100 Kilometers
        if (distance < 100000) {
          return (distance / 1000).toFixed(1);
        }

        // Round value is too big distance
        return Math.round(distance / 1000);
      },
    };

    nested.unit = 'Km';
    nested._chunk = {};
    nested = nested._chunk;
  };

  // Add meter
  nested.value = {
    toString() {
      return Math.round(distance % 1000);
    },
    toFixed() {
      return Math.round(distance % 1000);
    },
  };
  nested.unit = 'm';

  return result;
};
