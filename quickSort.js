// function partition(array, low, high) {
//   let pivot = array[high];
//   let i = low - 1;
//   for (let j = low; j <= high - 1; j++) {
//     if (array[j] < pivot) {
//       i++;
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
//   [array[i + 1], array[high]] = [array[high], array[i + 1]];
//   return i + 1;
// }

// function quickSort(array, low, high) {
//   if (low >= high) return;
//   let pi = partition(array, low, high);
//   quickSort(array, low, pi - 1);
//   quickSort(array, pi + 1, high);
// }

// let arr = [10, 80, 30, 90, 40];
// console.log("Original array: " + arr);

// quickSort(arr, 0, arr.length - 1);
// console.log("Sorted array: " + arr);

function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSortInPlace(arr, left, pivotIndex - 1);
    quickSortInPlace(arr, pivotIndex + 1, right);
  }
  return arr;
}
function partition(arr, left, right) {
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

const array = [0, 3, 7, 1, 6, 9, 2];
quickSortInPlace(array);
console.log(array);
