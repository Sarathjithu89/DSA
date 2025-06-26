const arr = [6, 7, 1, 4, 2, 9, 0, 3, 5, 8];

// function mergeSort(array) {
//   if (array.length <= 1) return array;
//   const mid = Math.floor(array.length / 2);
//   const left = array.slice(0, mid);
//   const right = array.slice(mid);
//   return merge(mergeSort(left), mergeSort(right)); //to merge
// }
// function merge(left, right) {
//   let result = [];
//   while (left.length && right.length) {
//     if (left[0] <= right[0]) result.push(left.shift());
//     else result.push(right.shift());
//   }
//   return [...result, ...left, ...right];
// }

//merge sort

function mergeSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;
  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(array, left, mid);
  mergeSort(array, mid + 1, right);
  merge(array, left, mid, right);
  return array;
}
function merge(array, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const L = new Array(n1);
  const R = new Array(n2);
  for (let i = 0; i < n1; i++) {
    L[i] = array[i + left];
  }
  for (let i = 0; i < n2; i++) {
    R[i] = array[mid + i + 1];
  }
  let i = 0,
    j = -0,
    k = left;

  while (i < n1 && j < n2) {
    if (L[i] < R[j]) {
      array[k] = L[i];
      i++;
      k++;
    } else {
      array[k] = R[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    array[k] = L[i];
    i++;
    k++;
  }
  while (j < n2) {
    array[k] = R[j];
    j++;
    k++;
  }
}

console.log(mergeSort(arr));
