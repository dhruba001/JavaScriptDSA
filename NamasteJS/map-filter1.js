// MAP

let arr = [5, 1, 3, 2, 6];

function double(x) {
  return 2 * x;
}

function triple(x) {
  return 3 * x;
}

function binary(x) {
  return x.toString(2);
}
//way 1
let res = arr.map(double);
console.log(res);
//way 2
let res1 = arr.map(function double(x) {
  return 2 * x;
});
console.log(res1);
//way 3
let res2 = arr.map((x) => 2 * x);
console.log(res2);

//filter

function isOdd(x) {
  return x % 2;
}
//way1
let res3 = arr.filter(isOdd);
console.log(res3);
//way2
let res4 = arr.filter(function isOdd(x) {
  return x % 2;
});
console.log(res4);
//way3
let res5 = arr.filter((x) => x % 2);
console.log(res5);
