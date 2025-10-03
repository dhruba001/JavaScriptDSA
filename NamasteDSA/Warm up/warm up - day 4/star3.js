let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 1; j <= i + 1; j++) {
    row = row + " " + j;
  }
  console.log(row);
}
