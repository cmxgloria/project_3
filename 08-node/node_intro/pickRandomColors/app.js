// fs is built in module
// modules
// _ same as , variable can lodash, should convention
const _ = require("lodash");
const axios = require("axios");
let colors = ["mistyrose", "pink", "plum"];
console.log(_.sample(colors));
// const lodash = require('lodash')
// console.log(lodash.sample(colors));

// httparty.get in ruby
// $.ajax() in the browser using the JQuery library which in turn use the built in browser XHR api

// axios.get(url).then(fn) --- this like JQuery, $.ajax(url).done(fn) ---$.ajax(url).done(response function)

// const bestMovie = res => {
//   console.log(res);
// };
axios.get("http://omdbapi.com/?t=jaws&apiKey=2f6435d9").then(res => {
  console.log(res.data.Title);
});

// ➜  pickRandomColors node inspect app.js
// < Debugger listening on ws://127.0.0.1:9229/a9677e46-3d52-4acc-8ed9-1bc5631da9a5
// < For help, see: https://nodejs.org/en/docs/inspector
// < Debugger attached.
// Break on start in app.js:4
//   2 // modules
//   3 // _ same as , variable can lodash, should convention
// > 4 const _ = require("lodash");
//   5 const axios = require("axios");
//   6 let colors = ["mistyrose", "pink", "plum"];
// debug> next
// break in app.js:5
//   3 // _ same as , variable can lodash, should convention
//   4 const _ = require("lodash");
// > 5 const axios = require("axios");
//   6 let colors = ["mistyrose", "pink", "plum"];
//   7 console.log(_.sample(colors));
// debug> next
// break in app.js:6
//   4 const _ = require("lodash");
//   5 const axios = require("axios");
// > 6 let colors = ["mistyrose", "pink", "plum"];
//   7 console.log(_.sample(colors));
//   8 // const lodash = require('lodash')
// debug> repl
// colors
// ["mistyrose", "pink", "plum"]
