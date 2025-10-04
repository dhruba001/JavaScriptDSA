let arr = [5, 6, 7, 4, 9, 3];

let res = arr.reduce(function sum(acc, cur) {
  acc = acc + cur;
  return acc;
}, 0);

console.log(res);
