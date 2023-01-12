/**
 * 
 * @param {string} str
 * @returns {boolean}
 */
function almostPalindrome(str) {
  str = str.replace(/[^A-Za-z0-9]/g, "");
  let flag = true;
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      if (flag === true) {
        if (str[i+1] === str[j]) {
          i++;
          flag = false;
        }
        else if (str[i] === str[j-1]) {
          j--;
          flag = false;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    i++;
    j--;
  }
  return true;
}

module.exports = almostPalindrome;