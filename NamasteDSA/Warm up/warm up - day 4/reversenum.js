let reverse = function (x) {
  xorg = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return xorg < 0 ? rev * -1 : rev;
};

let res = reverse(-123);
console.log(res);
