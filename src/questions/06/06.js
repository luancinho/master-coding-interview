/**
 * 
 * @param {string} str 
 */
function almostPalindrome(str) {
  let flag = true;
  let i = 0;
  let j = str.length - 1;
  while (i <= j) {
    if (str[i] !== str[j]) {
      if (flag && str[i++] === str[j]) {
        i++;
        flag = false;
      }
      else if (flag && str[i] === str[j--]) {
        j--;
        flag = false;
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