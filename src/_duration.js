//-------
// Return human format of duration
//-------
module.exports = function (duration, options = {}) {
  // Labels
  const labels = {
    days: 'days',
    hours: 'hours',
    minutes: 'minutes',
    seconds: 'seconds',
    glue: ' and ',
    ...options
  };

  // Init vars
  const result = { value: 0, rounded: 0, prefix: labels.seconds };
  let nested = result;

  // Calculate intervals
  const units = [labels.days, labels.hours, labels.minutes, labels.seconds];
  // const ratio = [86400, 3600, 60, 1];
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Parse duration (days, hours, minutes, seconds)
  [days, hours % 24, minutes % 60, duration % 60].forEach((item, i) => {
    if (item || result.prefix !== labels.seconds) {
      // Populate
      nested.value = item;
      nested.rounded = item; // Math.round(duration / ratio[i]);
      nested.prefix = units[i];

      // toString
      nested.toString = function () {
        return `${this.rounded}${this.prefix}`;
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
      return `${this.value}${this.prefix}${labels.glue}${this.rest}`;
    }

    return `${this.rounded}${this.prefix}`;
  };

  return result;
};
