console.log("ex2");
let name = "dt";
// window in frontend, process is global variable, it's array, keep add at the back in order, if word with space, have to put "sei 22"
console.log(process.argv);
console.log(`hello ${name}`);
// by default it should be async
// ➜  node_intro node ex2.js
// ex2
// [
//   '/Users/gloriachen/.nvm/versions/node/v12.15.0/bin/node',
//   '/Users/gloriachen/sei/code-alongs/08-node/node_intro/ex2.js'
// ]
// hello dt
// ➜  node_intro node ex2.js pokerface
// ex2
// [
//   '/Users/gloriachen/.nvm/versions/node/v12.15.0/bin/node',
//   '/Users/gloriachen/sei/code-alongs/08-node/node_intro/ex2.js',
//   'pokerface'
// ]
// hello dt

// then
console.log("ex2");
let name = "dt";
console.log(process.argv);
console.log(`hello ${process.argv[2]}`);
// hello pokerface
