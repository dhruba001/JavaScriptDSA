// Write a function that returns the largest number in an array

let arr = [-1, -12, -13, -4, -5, -16, -733, -98, -9];

const largestNumber = function (arr) {
  let num = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      num = arr[i];
    }
  }
  return num;
};
let res = largestNumber(arr);
console.log(res);
