let arr = [4, 2];

const secondLargest = function (arr) {
  if (arr.length < 2) {
    return -1;
  }

  let firstlargest = -Infinity;
  let secondlargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstlargest) {
      secondlargest = firstlargest;
      firstlargest = arr[i];
    } else if (arr[i] > secondlargest) {
      secondlargest = arr[i];
    }
  }

  return `first ${firstlargest} 2nd ${secondlargest}`;
};

let res = secondLargest(arr);
console.log(res);
