//-------
// Secure compare (see https://snyk.io/blog/node-js-timing-attack-ccc-ctf/#timing-attacks)
//-------
module.exports = function (a, b) {
  let mismatch = 0;

  for (let i = 0; i < a.length; i += 1) {
    mismatch = mismatch || Math.abs((a.charCodeAt(i) - b.charCodeAt(i)));
  }

  return a.length !== b.length ? mismatch === -1 : mismatch === 0;
};
