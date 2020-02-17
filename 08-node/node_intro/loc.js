// line of code
// open or read  input file
// need filename
// IO- input and output- node really good when you program has lots of IO ; non block IO
// require 'fileutils'
const fs = require("fs");
// fs is build in module , if ./ex3 know require the file
let file = fs.readFileSync("ex3.js");
// related file in same folder, no need ./ex3.js
let lines = file.toString().split("\n");
let linesWithCode = lines.filter(line => line.trim() !== "");
// line without space
console.log(linesWithCode.length);

// '      '.trim() === ''      true
