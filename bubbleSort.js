//buble sort
function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    let swapped = false; //flag
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swapped = true; //flag to true
      }
    }
    if (!swapped) {
      break; //if no swaps happens then array is sorted
    }
  }
  return array;
}

const arr = [5, 6, 1, 3, 9, 44, 22, 590, 3, 6, 7, 2, 36, 9, 42];

console.log(bubbleSort(arr));
