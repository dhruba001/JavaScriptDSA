function countNum(n) {
  n = Math.abs(n); // edge case if n is -ve
  if (n === 0) return 1; // corner case if n == 0
  let count = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let res = countNum(-89);
console.log(res);
// this can't count fractional values
