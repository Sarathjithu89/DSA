// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function sumRow(array) {
//   let tem = new Array(array[0].length).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       tem[j] += array[i][j];
//     }
//   }
//   array.forEach((ele, i) => {
//     ele.push(tem[i]);
//   });
//   return array;
// }
// console.log(sumRow(matrix));

//return the index of a target in the array;
const matrix = [
  [2, 4, 5],
  [11, 15, 18],
  [20, 26, 32],
];
function findIndex(array, target) {
  let m = array.length;
  let n = array[0].length;

  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let num = array[Math.floor(mid / n)][mid % n];
    if (target === num) return [Math.floor(mid / n), mid % n];
    if (target > num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
console.log(findIndex(matrix));
