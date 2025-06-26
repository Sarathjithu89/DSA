// //quick sort
// function quickSort(array) {
//   if (array.length < 1) return array;
//   let pivot = array[array.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < array.length - 1; i++)
//     if (array[i] <= pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// //quick sort in place
// function quickSortInPlace(arr, left = 0, right = arr.length - 1) {
//   if (left < right) {
//     const pivotIndex = pivot(arr, left, right);
//     quickSortInPlace(arr, left, pivotIndex - 1);
//     quickSortInPlace(arr, pivotIndex + 1, right);
//   }
//   return arr;
// }
// function pivot(arr, left, right) {
//   const pivot = arr[right];
//   let i = left - 1;
//   for (let j = left; j < right; j++) {
//     if (arr[j] < pivot) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
//   return i + 1;
// }

// const array = [55, 0, 3, 7, 1, 6, 9, 2];
// quickSortInPlace(array);
// console.log(array);

// console.log(quickSort(array));

//random pivot
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = partition(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
}
function partition(array, left, right) {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1) + left);
  const pivotVal = array[pivotIndex];
  swap(array, pivotIndex, right);
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] < pivotVal) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, [i + 1], right);
  return i + 1;
}
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
let arrr = [10, 7, 8, 9, 1, 5];
quickSort(arrr, 0, arrr.length - 1);
console.log(arrr);
