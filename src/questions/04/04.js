/**
 * 
 * @param {string} x 
 * @param {string} y
 * @returns {boolean}
 */
function backspaceCompare(x, y) {
  let i = x.length - 1;
  let j = y.length - 1;
  while (i >= 0 || j >= 0) {
    if (x[i] === '#' || y[j] === '#') {
      if (x[i] === '#') {
        let spaces = 2;
        while (spaces > 0) {
          i--;
          if (x[i] === '#') {
            spaces += 2;
          }
          spaces--;
        }
      }
      if (y[j] === '#') {
        let spaces = 2;
        while (spaces > 0) {
          j--;
          if (y[j] === '#') {
            spaces += 2;
          }
          spaces--;
        }
      }
    }
    else {
      if (x[i] !== y[j]) {
        return false;
      }
      else {
        i--;
        j--;
      }
    }
  }
  return true;
}

module.exports = backspaceCompare;