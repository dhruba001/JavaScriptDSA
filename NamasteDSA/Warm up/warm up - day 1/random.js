function helloworld() {
  console.log("Hello world");
}

helloworld();

obj1 = {
  name: "dhruba",
  age: 30,
};

console.log(obj1.name);

const greet = function (name) {
  console.log("Namaste" + " " + name);
};

greet("dhruba");

const add = function (a, b) {
  return a + b;
};
let b = add(7, 8);
console.log(b);

const eligibleToVote = function (age) {
  if (age >= 18) return true;
  else return false;
};

const statusofvote = eligibleToVote(19);
console.log(statusofvote);

function evenOddChecker(num) {
  if (num % 2 === 0) console.log(`${num} is even`);
  else console.log(`${num} is odd`);
}
evenOddChecker(51);
