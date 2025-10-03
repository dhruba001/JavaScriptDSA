for (let i = 5; i > 0; i--) {
  let flag = 0;
  console.log(`for ${i} value `);
  for (let j = 0; j < i; j++) {
    flag++;
    console.log(`i is ${i} : j is ${j}`);
  }
  console.log("j ran for " + flag + "times");
}
