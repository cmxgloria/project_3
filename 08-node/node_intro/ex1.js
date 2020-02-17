console.log("ex1");
// let numbers = [1, 2, 3, 4];
// var result = numbers.reduce((accum, num) => accum + num);

let numbers = [1, 2, 3, 4];
console.log(process.argv);
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total = total + numbers[i];
}
console.log(total);
// 10

// another way
// let numbers = [1, 2, 3, 4];
// let numbers = process.argv.slice(2);

// var total = 0;
// numbers.forEach(num => (total += Number(num)));
// console.log(total);

// another way
// let numbers = [1, 2, 3, 4];
console.log(
  process.argv
    .slice(2)
    // start the position 2, no secon arguement means rest
    .map(num => Number(num))
    .reduce((accum, num) => accum + num)
);
// 11
// ➜  node_intro node ex1.js 5 6
// ex1
// [
//   '/Users/gloriachen/.nvm/versions/node/v12.15.0/bin/node',
//   '/Users/gloriachen/sei/code-alongs/08-node/node_intro/ex1.js',
//   '5',
//   '6'
// ]
// 10
// 11
