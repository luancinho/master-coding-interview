const backspaceCompare = require('./04.js');

describe('backspace compare', () => {
  test('should return true for backspaceCompare("ab#z", "az#z")', () => {
    expect(backspaceCompare('ab#z', 'az#z')).toBe(true);
  });
  test('should return false for backspaceCompare("abc#d", "acc#c")', () => {
    expect(backspaceCompare("abc#d", "acc#c")).toBe(false);
  });
  test('should return true for backspaceCompare("x#y#z#", "a#")', () => {
    expect(backspaceCompare("x#y#z#", "a#")).toBe(true);
  });
  test('should return true for backspaceCompare("abc#d", "acc#c")', () => {
    expect(backspaceCompare("a###b", "b")).toBe(true);
  });
  test('should return false for backspaceCompare("Ab#z", "ab#z")', () => {
    expect(backspaceCompare("Ab#z", "ab#z")).toBe(false);
  });
});