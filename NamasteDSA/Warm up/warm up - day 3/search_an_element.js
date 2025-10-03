// write a function that searches for an element in an array and returns the index, if the elelment is not present then just return -1
// searchElement(arr, numToBeSearch) ==> return the position in array

let arr = [4, 2, 0, 10, 8, 30];

const searchArray = function (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return `index = ${i}`;
  }
  return -1;
};

const res = searchArray(arr, 87);
console.log(res);
