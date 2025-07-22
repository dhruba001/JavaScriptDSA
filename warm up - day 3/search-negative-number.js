// write a function that returns the number of negative numbers in an array

let array1 = [2, -9, 17, 0, 1, -10, -4, 8];

function returnNegative(arr) {
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      flag++;
    }
  }
  return flag;
}

let totNegative = returnNegative(array1);
console.log(totNegative);
