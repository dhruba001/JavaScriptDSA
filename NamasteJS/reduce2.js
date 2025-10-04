let arr1 = [1, 5, 6, 800, 197, 3];

// using function

function max(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > x) {
      x = arr[i];
    }
  }
  return x;
}

let res = max(arr1);
console.log(res);

// using reduce

let res2 = arr1.reduce(function findMax(acc, cur) {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
}, 0);

console.log(res2);
