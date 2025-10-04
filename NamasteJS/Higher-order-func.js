let radius1 = [3, 1, 2, 4];

const area = function (radius) {
  return 2 * Math.PI * radius;
};

const calculate = function (radius, logic) {
  let output = [];

  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius1, area));
