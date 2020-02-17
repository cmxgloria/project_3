// built in function,built in standard library - node API -fs-file system
// how to do require that library
// node had added special keyword require
// require is function call that returns access to library
// properties and functions
const fs = require("fs");
// sync blocking version, another is asyc fs.readFile
let file = fs.readFileSync("ex3.js");
console.log(file.toString());
// print all of the ex3 information, if only file, just file log inside lot of information
