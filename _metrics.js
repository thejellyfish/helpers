//-------
// Return human format of value
//-------

module.exports = {
  // Value in meter
  distance(value) {
    return value;
  },

  // Value in gramms
  weight(value) {
    return value;
  },

  // Value in seconds
  duration(value) {
    return value;
  }
};

/*
const distance = _metric.distance(5450);

distance = {
  value: 15,
  unit 'Kg',
  fractional: {
    value: 47,
    unit: 'g',
  },
  toString() {
  },
  format() {
  }
}


distance.toString() => '15 Kg et 47g';

distance.format(precision) => '15,7 Kg';
*/
