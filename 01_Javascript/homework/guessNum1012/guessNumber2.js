const number = Math.floor(Math.random() * 10001);

while (true) {
  const userInput = prompt("please guess a number between 0 and 10000");
  const guessNum = parseInt(userInput);
  if (guessNum > number) {
    console.log('"Wrong, guess lower!"');
  } else if (guessNum < number) {
    console.log("Wrong, guess higher!");
  } else {
    console.log("Congratulation!");
    break;
  }
}

// // another way
// console.log("guess");
// var secret = 7;
// var guess = Number(prompt("take a guess number"));
// while (guess !== secret) {
//   guess = Number(prompt("take a guess number"));
// }
// alert('good on ya');
