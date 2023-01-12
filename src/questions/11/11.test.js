const minBracketsRemove = require('./11.js');

describe('minimum brackets to remove and make valid', () => {
  test('should return "abc(d)" for minBracketsRemove("a)bc(d)")', () => {
    expect(minBracketsRemove("a)bc(d)")).toBe("abc(d)");
  });

  test('should return "ab(c)d" for minBracketsRemove("(ab(c)d")', () => {
    expect(minBracketsRemove("(ab(c)d")).toBe("ab(c)d");
  });

  test('should return "" for minBracketsRemove("))((")', () => {
    expect(minBracketsRemove("))((")).toBe("");
  });
});