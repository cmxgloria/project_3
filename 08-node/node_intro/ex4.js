// built in module
const fs = require("fs");
// async function, no blocking
// file could take a long time to read
// inside callback function, 2 arguments(err,data)
fs.readFile("ex2.js", (err, data) => console.log(data.toString()));
console.log("me first");

// node_intro node ex4.js
// me first
// console.log("ex2");
// // let name = "dt";
// // window in frontend, process is global variable, it's array, keep add at the back in order, if word with space, have to put "sei 22"
// console.log(process.argv);
// console.log(`hello ${name}`);
// // by default it should be async
// // ➜  node_intro node ex2.js
// // ex2
// // [
// //   '/Users/gloriachen/.nvm/versions/node/v12.15.0/bin/node',
// //   '/Users/gloriachen/sei/code-alongs/08-node/node_intro/ex2.js'
// // ]
// // hello dt
// // ➜  node_intro node ex2.js pokerface
// // ex2
// // [
// //   '/Users/gloriachen/.nvm/versions/node/v12.15.0/bin/node',
// //   '/Users/gloriachen/sei/code-alongs/08-node/node_intro/ex2.js',
// //   'pokerface'
// // ]
// // hello dt

// // then
// console.log("ex2");
// let name = "dt";
// console.log(process.argv);
// console.log(`hello ${process.argv[2]}`);
// // hello pokerface
