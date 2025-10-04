let arr = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 9];

function removeDuplicates(array) {
  let x = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[x]) x += 1;
    array[x] = array[i];
  }
  return x + 1;
}

let res = removeDuplicates(arr);
console.log(res);
console.log(arr.slice(0, res));
