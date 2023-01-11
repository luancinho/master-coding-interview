const longestSubstring = require('./05.js');

describe('longest substring', () => {
  test('should return 4 for longestSubstring("abcbdca")', () => {
    expect(longestSubstring('abcbdca')).toBe(4);
  });
  test('should return 3 for longestSubstring("abccabb")', () => {
    expect(longestSubstring('abccabb')).toBe(3);
  });
  test('should return 1 for longestSubstring("cccccc")', () => {
    expect(longestSubstring('cccccc')).toBe(1);
  });
  test('should return 0 for longestSubstring("")', () => {
    expect(longestSubstring(''))
  });
  test('should return 4 for longestSubstring("abcbda")', () => {
    expect(longestSubstring('abcbda')).toBe(4);
  });
});