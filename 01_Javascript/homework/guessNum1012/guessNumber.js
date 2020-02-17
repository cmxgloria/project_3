const randomNumber = Math.floor(Math.random() * 11);
while (true) {
  debugger;
  const userInput = prompt("please guess a number between 0 and 10");
  const guessNum = parseInt(userInput);
  if (guessNum === randomNumber) {
    console.log("Congratulation!");
    break;
  }
}

// //another answer
// console.log("guess");
// var secret = 7;
// var guess = Number(prompt("take a guess number"));
// if (guess === secret) {
//   console.log("Congratulation!");
// }
