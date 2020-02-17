console.log("ajax demo");
console.log("function to make a request");

// a function to make a request
// HTTParty.get(url)
// $ is object, call function ajax, $.ajax
// like this sample, var $ = { ajax: 'fdsgsgs'}, $ is jQuery variable object
// callbacks, done() inside to have to function
// call function is call itself like handleResponse(); callback function is other person call you later when you finish like done(handleResponse)

var handleResponse = function(res) {
  console.log("got the response back from omdb");
  console.log(res.Title);
  document.querySelector("h1").textContent = res.Title;
};
var options = { url: "http://omdbapi.com/?t=jaws&apikey=2f6435d9" };
// notMovieDetails is not 100% response what we need until handleResponse function finish
var notMovieDetails = $.ajax(options).done(handleResponse);
console.log("me first");

// output
// ajax demo
// app.js:2 function to make a request
// app.js:14 me first
// app.js:11 got the response back from omdb
// jquery-3.4.1.js:9837 XHR finished loading: GET "http://omdbapi.com/?t=jaws&apikey=2f6435d9".
