//-------
// Return array from start to end INCLUDED (beware, different than lodash where end is not included)
//-------
module.exports = function (start, end, step = 1) {
  const data = new Array(Math.ceil(1 + (end - start) / step))
    .fill(null)
    .map((_nop, i) => start + step * i);

  // One too many ?
  if (data[data.length - 1] > end) {
    data.pop();
  }

  return data;
};
