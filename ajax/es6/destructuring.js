// syntactic sugar var[] for array destructuring, var{} for object destructuring

// array destructuring
var favFruits = ["apple", "pear", "banana"];

// destructuring -poor persons pattern matching
// var first = favFruits[0];
// var second = favFruits[1];
// var third = favFruits[2];
var [first, second, third] = favFruits;

// rest and spread syntax ...
// is same syntax but different idea depends on how you use it, the first and rest can be different name, but corresponding
var [first, ...rest] = favFruits;
// first will be apple; rest will be pear and banana;

var word = ["h", "e", "y"];
var [firstLetter, ...restOfWord] = word;
console.log(`${firstLetter.toUpperCase()}${restOfWord.join("")}`);
// Hey

// object destructuring
function getUser() {
  // lots of crazy code

  return {
    nickname: "pokerface",
    id: 22
  };
}
// var username = getUser().name
var { nickname: username, id: number } = getUser();
// pokerface, 22

// object shorthand notation
var { id, nickname } = getUser();
// getUser().nickname
// "pokerface"
