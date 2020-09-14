//-------
// Return human format of duration
//-------
module.exports = function (duration) {
  // Init
  const result = {
    value: 0,
    rounded: 0,
    prefix: 'sec',
  };
  let nested = result;

  // Calculate intervals
  const units = ['j', 'h', 'min', 'sec'];
  // const ratio = [86400, 3600, 60, 1];
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Parse duration (days, hours, minutes, seconds)
  [days, hours % 24, minutes % 60, duration % 60].forEach((item, i) => {
    if (item || result.prefix !== 'sec') {
      // Populate
      nested.value = item;
      nested.rounded = item; // Math.round(duration / ratio[i]);
      nested.prefix = units[i];

      // toString
      nested.toString = function () {
        return `${this.rounded} ${this.prefix}`;
      };

      // Nested
      if (i < 3) {
        nested.rest = {};
        nested = nested.rest;
      }
    }
  });

  result.toString = function () {
    // Has rest ?
    if (this.rest && this.rest.value) {
      return `${this.value} ${this.prefix} et ${this.rest}`;
    }

    return `${this.rounded} ${this.prefix}`;
  };

  return result;
};
