const secret = 42;
function getFavorColor() {
  console.log(secret);
  return "mistyrose";
}
// // what do you want to export from within this file
// // be default this is private room
// // everything is local- magic
// module.exports = getFavorColor;

// sample 2
const PI = 3.14;
function areaOfCircle(radius) {
  return PI * radius * radius;
}
let user = {
  name: "dt",
  areaOfCircle: areaOfCircle
};
module.exports = user;

// sample3
var username = "gloria";
// this is not global, only local
function doWork() {
  console.log(username);
}
module.exports = doWork;
