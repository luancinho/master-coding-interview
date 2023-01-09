const getMaxWaterContainer = require('./02.js');

describe('get max water container', () => {
  test('should return 28 for getMaxWaterContainer([7, 1, 2, 3, 9])', () => {
    expect(getMaxWaterContainer([7, 1, 2, 3, 9])).toBe(28);
  });

  test('should return 0 for getMaxWaterContainer([])', () => {
    expect(getMaxWaterContainer([])).toBe(0);
  });

  test('should return 0 for getMaxWaterContainer([7])', () => {
    expect(getMaxWaterContainer([7])).toBe(0);
  });

  test('should return 32 for getMaxWaterContainer([6, 9, 3, 4, 5, 8])', () => {
    expect(getMaxWaterContainer([6, 9, 3, 4, 5, 8])).toBe(32);
  });
});