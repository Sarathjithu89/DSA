function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
}
function pivot(array, left, right) {
  let pivot = array[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  return i + 1;
}

const arr = [5, 7, 8, 5, 34, 7, 3, 5, 2, 1, 4, 0, 2, 3];

console.log(quickSort(arr));
