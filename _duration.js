//-------
// Return human format of duration
//-------
module.exports = function (duration) {
  // Init
  const result = {
    _value: duration,
    _rounded: duration,
    _prefix: 'sec',
    _rest: {},
  };
  let nested = result;

   // Calculate intervals
  const units = ['j', 'h', 'min', 'sec'];
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Parse duration (days, hours, minutes, seconds)
  [days, hours % 24, minutes % 60, duration % 60].forEach((item, i) => {
    if (item || result._prefix !== 'sec') {
      // Populate
      nested._value = item;
      nested._rounded = item;
      nested._prefix = units[i];
      nested._rest = {};

      // toString
      nested.toString = function() {
        return `${this._rounded} ${this._prefix}`;
      };

      // Nested
      nested = nested._rest;
    }
  });


  result.toString = function() {
    // Has rest ?
    if (this._rest._value) {
      return `${this._value} ${this._prefix} et ${this._rest}`;
    }

    return `${this._rounded} ${this._prefix}`;
  };

  return result;
};
