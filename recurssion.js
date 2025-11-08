/*//-----------------start--------------------------//

//sum of nums in array
const arr = [1, 3, [3, [4], 5], [4], 9];

function sumNumbers(array) {
  let total = 0;
  for (const num of array) {
    if (Array.isArray(num)) {
      total += sumNumbers(num);
    } else {
      total += num;
    }
  }
  return total;
}
console.log(sumNumbers(arr));

//print numbers up to n;
function recursion(n) {
  if (n <= 0) return;
  recursion(n - 1);
  console.log(n);
}
recursion(5);

//indirect recuression example
function A(n) {
  if (n > 0) {
    console.log("A", n);
    B(n - 1);
  }
}
function B(n) {
  if (n > 0) {
    console.log("B", n);
    A(n - 1);
  }
}

B(5);

//factorial using recurssion
function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));

//fibonachi using recuresion
function fib(n) {
  if (n < 0) return;
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(10));

//fibonachi with memoization
function fib(n, memo = {}) {
  if (n < 0) return;
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log(fib(10));

//replace the odd numbers with zero and find the sum of even return array and sum
const array = [1, 4, 5, 6, 7, 2, 3];
function sumReplace(array, count = array.length - 1, sum = 0) {
  if (count < 0) return { array, sum };

  if (array[count] % 2 !== 0) {
    array[count] = 0;
  } else {
    sum += array[count];
  }
  return sumReplace(array, count - 1, sum);
}
console.log(sumReplace(array));

*/ //--------------------end-----------------------------///
const fileSystem = {
  name: "root",
  files: ["file1.txt", "file2.txt"],
  folders: [
    {
      name: "docs",
      files: ["doc1.pdf", "doc2.pdf"],
      folders: [
        {
          name: "personal",
          files: ["resume.docx"],
          folders: [],
        },
      ],
    },
    {
      name: "images",
      files: ["photo1.jpg", "photo2.jpg"],
      folders: [],
    },
  ],
};

function getAllFiles(folder) {
  let allFiles = [...folder.files];
  for (const subFolder of folder.folders) {
    allFiles = allFiles.concat(getAllFiles(subFolder));
  }
  return allFiles;
}

const files = getAllFiles(fileSystem);
console.log(files);
