const almostPalindrome = require('./06.js');

describe('almost a palindrome', () => {
  test('should return true for almostPalindrome("raceacar")', () => {
    expect(almostPalindrome('raceacar')).toBe(true);
  });
  
  test('should return true for almostPalindrome("abccdba")', () => {
    expect(almostPalindrome('abccdba')).toBe(true);
  });
  
  test('should return false for almostPalindrome("abcdefdba")', () => {
    expect(almostPalindrome('abcdefdba')).toBe(false);
  });
  
  test('should return true for almostPalindrome("")', () => {
    expect(almostPalindrome('')).toBe(true);
  });
  
  test('should return true for almostPalindrome("a")', () => {
    expect(almostPalindrome('a')).toBe(true);
  });

  test('should return true for almostPalindrome("ab")', () => {
    expect(almostPalindrome('ab')).toBe(true);
  });
});