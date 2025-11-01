const arr = [3, 5, 7, 9, 12, 24, 30, 38, 44, 48, 50, 88, 89, 95, 100];

//return the index of the element in the array if no element exixts it returns the index where it should be;
function binarySearch(array, ele) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + right) / 2;
    if (ele > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(binarySearch(arr, 4));
