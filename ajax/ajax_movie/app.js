var searchBtn = document.querySelector("button");
searchBtn.addEventListener("click", function(e) {
  // avoid log thing, it is gone qucikly, remember this
  e.preventDefault();
  console.log("gkjkg");
  // get the input value
  var title = document.querySelector("input").value;
  // make an ajax request using the input value as part of the url
  var url = `http://omdbapi.com/?t=${title}&apikey=2f6435d9`;
  // var url = `http://omdbapi.com/?s=${title}&apikey=2f6435d9`;
  var handleResponse = function(res) {
    console.log(res.Title);
  };
  // ajax function is expecting you to pass in an object with the key url
  // option is built in ajax function
  $.ajax({ url: url }).done(handleResponse);
});

// $.ajax({ url, get}).done(handleResponse);
// $.ajax({ url: url, method: get}).done(handleResponse);

// function ajax(url, method){

// }
// $.ajax({ url: url, method: get}).done(handleResponse);
