console.log("hello");
const getFavColor = require("./lib.js");
let favColor = getFavColor();
console.log(`my favorite color is: ${favColor}`);

// output like this
// hello
// 42
// my favorite color is: mistyrose

// sample2
const user = require("./lib.js");
console.log(user.name);
console.log(user.areaOfCircle(4));

// sample3
const doWork = require("./lib.js");
doWork();
