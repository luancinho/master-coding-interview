const validParentheses = require('./10.js');

describe('valid parentheses', () => {
  test('should return true for validParentheses("")', () => {
    expect(validParentheses("")).toBe(true);
  });

  test('should return true for validParentheses("{([])}")', () => {
    expect(validParentheses("{([])}")).toBe(true);
  });

  test('should return false for validParentheses("{([]")', () => {
    expect(validParentheses("{([]")).toBe(false);
  });

  test('should return false for validParentheses("{[(])}")', () => {
    expect(validParentheses("{[(])}")).toBe(false);
  });

  test('should return true for validParentheses("{[]()}")', () => {
    expect(validParentheses("{[]()}")).toBe(true);
  });
});