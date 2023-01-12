/**
 * Given a string only containing round brackets and lowercase 
 * characters
 * 
 * @param {string} str 
 * @returns {string} - valid string with the fewest brackets removed
 */
function minBracketsRemove(str) {
  if (str.length === 0) return str;
  const stack = [];
  const array = str.split('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    }
    else if (str[i] === ')' && stack.length > 0) {
      stack.pop();
    }
    else if (str[i] === ')') {
      array[i] = '';
    }
  }
  while (stack.length > 0) {
    let i = stack.pop();
    array[i] = '';
  }
  return array.join('');
}

module.exports = minBracketsRemove;