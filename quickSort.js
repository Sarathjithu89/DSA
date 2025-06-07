function partition(array, low, high) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}

function quickSort(array, low, high) {
  if (low >= high) return;
  let pi = partition(array, low, high);
  quickSort(array, low, pi - 1);
  quickSort(array, pi + 1, high);
}

let arr = [10, 80, 30, 90, 40];
console.log("Original array: " + arr);

quickSort(arr, 0, arr.length - 1);
console.log("Sorted array: " + arr);
