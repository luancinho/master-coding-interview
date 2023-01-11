const trappingRainWater = require('./03.js');

describe('trapping rain water', () => {
  test('should return 8 for trappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])', () => {
    expect(trappingRainWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])).toBe(8);
  });

  test('should return 5 for trappingRainWater([5, 0, 5])', () => {
    expect(trappingRainWater([5, 0, 5])).toBe(5);
  });

  test('should return 0 for trappingRainWater([])', () => {
    expect(trappingRainWater([])).toBe(0);
  });

  test('should return 0 for trappingRainWater([3])', () => {
    expect(trappingRainWater([3])).toBe(0);
  });

  test('should return 0 for trappingRainWater([3, 4, 3])', () => {
    expect(trappingRainWater([3, 4, 3])).toBe(0);
  });
});