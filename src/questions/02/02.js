/**
 * 
 * @param {number} i 
 * @param {number} j 
 * @param {number[]} arr 
 * @returns {number}
 */
function calculate(i, j, arr) {
  let height = Math.min(arr[i], arr[j]);
  let width = j - i;
  return height * width;
}

/**
 * 
 * @param {number[Array]} arr 
 * @returns {number}
 */
function getMaxWaterContainer(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  else {
    let i = 0;
    let j = arr.length - 1;
    let max = calculate(i, j, arr);
    while (i < j) {
      let current = calculate(i, j, arr);
      max = current > max ? current : max;
      if (i > j) {
        j--;
      }
      else {
        i++;
      }
    }
    return max;
  }
}

module.exports = getMaxWaterContainer;