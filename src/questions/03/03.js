/**
 * 
 * @param {number[]} arr 
 * @returns {number}
 */

function trappingRainWater(arr) {
  let i = 0;
  let j = arr.length - 1;
  let maxLeft = arr[i];
  let maxRight = arr[j];
  let total = 0;
  while (i < j) {
    if (arr[i] < arr[j]) {
      if (maxLeft > arr[i]) {
        total += maxLeft;
      }
      if (maxLeft <= arr[i]) {
        maxLeft = arr[i];
      }
      i++;
    }
    else {
      if (maxRight > arr[j]) {
        total += maxRight;
      }
      if (maxRight <= arr[j]) {
        maxRight = arr[j];
      }
      j--;
    }
  }
  return total;
}

module.exports = trappingRainWater;