function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, high);
  return i;
}

function quicksort(arr, low, high) {
  if (low < high) {
    let i = partition(arr, low, high);
    quicksort(arr, low, i - 1);
    quicksort(arr, i + 1, high); 
  }
}

module.exports = quicksort;