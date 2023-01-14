const quicksort = require('./quicksort.js');

describe('quick sort', () => {
  test('should returns [1, 5, 7, 8, 9, 10] for quickSort([10, 7, 8, 9, 1, 5])' , () => {
    let arr = [10, 7, 8, 9, 1, 5];
    quicksort(arr, 0, arr.length - 1)
    expect(arr).toEqual([1, 5, 7, 8, 9, 10]);
  });

  test('should returns [1, 2, 3, 7, 9] for quickSort([1, 3, 7, 9, 2])' , () => {
    let arr = [1, 3, 7, 9, 2];
    quicksort(arr, 0, arr.length - 1)
    expect(arr).toEqual([1, 2, 3, 7, 9]);
  });

  test('should returns [-5, 1, 10] for quickSort([10, -5, 1])' , () => {
    let arr = [10, -5, 1];
    quicksort(arr, 0, arr.length - 1)
    expect(arr).toEqual([-5, 1, 10]);
  });

  test('should returns [13] for quickSort([13])' , () => {
    let arr = [13];
    quicksort(arr, 0, arr.length - 1)
    expect(arr).toEqual([13]);
  });
  
  test('should returns [] for quickSort([])' , () => {
    let arr = [];
    quicksort(arr, 0, arr.length - 1)
    expect(arr).toEqual([]);
  });
});