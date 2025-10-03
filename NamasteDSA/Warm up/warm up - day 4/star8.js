let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  let swap = 1;
  for (let j = 0; j <= i; j++) {
    row = row + " " + swap;
    if (swap === 1) swap = 0;
    else swap = 1;
  }
  console.log(row);
}
