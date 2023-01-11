/**
 * 
 * @param {string} str
 * @returns {number} 
 */
function longestSubstring(str) {
  let i = 0;
  let longest = 0;
  const seen = new Map();
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (seen.has(char) && seen.get(char) >= i) {
      i = seen.get(char) + 1;
    }
    longest = Math.max(j - i + 1, longest);
    seen.set(char, j);
  }
  return longest;
}

module.exports = longestSubstring;