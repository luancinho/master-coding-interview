/**
 * 
 * @param {number[]} arr 
 * @param {number} target 
 */
function twoSum(arr, target) {
  const seen = new Map();
  for (let i=0; i < arr.length; i++) {
    let current = arr[i];
    if (seen.has(current)) {
      return [seen.get(current), i];
    }
    else {
      let diff = target - current;
      seen.set(diff, i);
    }
  }
  return [];
}

module.exports = twoSum;