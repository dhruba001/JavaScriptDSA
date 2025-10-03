// write a function that returns the number of negative numbers in an array

let array1 = [2, -9, -17, 3, 1, -10, -4, 8];

const returnNegative = function (arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) flag++;
  }
  return flag;
};

const totNeg = returnNegative(array1);
console.log(totNeg);
