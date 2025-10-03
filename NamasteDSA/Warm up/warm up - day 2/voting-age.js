// create a function which acceps the age and tells whether a person is elligible to vote or not

function elligibleToVote(age) {
  if (age < 18) {
    return "not elligible";
  } else {
    return "elligible";
  }
}
console.log(elligibleToVote(15), elligibleToVote(19));

// way 2
function elligibleToVote2(age) {
  return age < 1 ? "Invalid-age" : age > 18 ? "elligible" : "Not-elligible";
}
console.log(elligibleToVote2(15), elligibleToVote2(19), elligibleToVote2(0));
