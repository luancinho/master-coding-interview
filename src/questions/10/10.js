/**
 * 
 * @param {string} str
 * @returns {boolean} 
 */
function validParentheses(str) {
  const stack = [];
  const pairs = new Map();
  pairs.set('(', ')');
  pairs.set('[', ']');
  pairs.set('{', '}');
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (pairs.has(current)) {
      stack.push(current);
    }
    else {
      let last = stack.pop();
      if (pairs.get(last) !== current) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

module.exports = validParentheses;