function palindrome(num) {
  if (num < 0) return false;
  numOrg = num;
  let rev = 0;
  let rem = 0;
  while (num > 0) {
    rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }
  if (rev === numOrg) return true;
  else return false;
}

let res = palindrome(-121);
console.log(res);
