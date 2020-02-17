console.log("var let const");
var age = 1;
// age = 2 ok. reassignment
var age = 2;
console.log(age);
// 2

let age = 1;
let age = 2;
// let can reassignment , not declaration
// syntax error, age defined before; but cant do inspect twice for same thing

// scope - global & function
// var can global & function
function room() {
  var canVote = true;
  function secondFloor() {
    console.log(canVote);
    // works
  }
}
// console.log(canVote) not work

// let has drum roll block scope!!!!! let is annoying in the console
// let is great in your code for free sanity check

{
  // block
  let cash = 100;
}

{
  // global
  var cash = 100;
}

// one use case is for loops(insdie we can use var,const;small project use var, big project use let ,easy to detect the same variable name)
for (let i = 0; i < 5; i++) {
  // i is block scope
}
if (age > 17) {
  let canVote = true;
}
// console.log(canVote) not work outside, let block

// const, not blocking inside function
const favColor = "mistoryrose";
// favColor = 'green' error- no reassignment

const pi = 3.1415;
// gotchas
// assignment or binding pr redeclaring
// can mutate object of binding, not reassignment
const account = {
  name: "saving",
  balance: 100,
  profile: {}
};
// account = "saving account"    not working, no reassignment
account.balance = 1000000000;
// this binding object is working

Object.freeze(account);
// shallow, freeze can not freeze {} inside profile

// haskell
// partly inspired by coffeescript
[1, 2, 3].map(num => num * 2);
