for (let i = 0; i > 0; i = i + 2) {
  console.log(`this is a for loop iteration ${i}`);
}

function printName(num) {
  return `dhruba is called ${num} times here`;
}

for (let i = 0; i < 5; i++) {
  const name = printName(i);
  console.log(name);
}
