//-------
// Return human format of duration
//-------
module.exports = function (duration) {
  // Init
  const result = {
    value: 0,
    unit: 'sec',
    toString() {
      if (this._chunk && this._chunk.value) {
        return `${this.value.toFixed()} ${this.unit} et ${this._chunk.value.toFixed()} ${this._chunk.unit}`;
      }

      return `${this.value.toFixed()} ${this.unit}`;
    },
  };
  let nested = result;

  // Calculate intervals
  const units = ['j', 'h', 'min', 'sec'];
  const minutes = Math.floor(duration / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Parse duration (days, hours, minutes, seconds)
  [days, hours % 24, minutes % 60, duration % 60].forEach((item, i) => {
    if (item || result.unit !== 'sec') {
      nested.value = {
        toString() {
          return item;
        },
        toFixed() {
          return item;
        }
      };
      nested.unit = units[i];
      nested._chunk = {};
      nested = nested._chunk;
    }
  });

  return result;
};
