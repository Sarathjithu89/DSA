//quick sort
function quickSort(array) {
  if (array.length < 1) return array;
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++)
    if (array[i] <= pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

//quick sort in place
function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    quickSortInPlace(arr, left, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, right);
  }
  return arr;
}
function pivot(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

const array = [55, 0, 3, 7, 1, 6, 9, 2];
quickSortInPlace(array);
console.log(array);

console.log(quickSort(array));
