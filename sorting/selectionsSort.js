//selection sort

const arr = [3, 4, 2, 5, 1, 3, 5, 7, 0, 2, 33, 6];

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[min], array[i]] = [array[i], array[min]];
    }
  }
  return array;
}

console.log(selectionSort(arr));
