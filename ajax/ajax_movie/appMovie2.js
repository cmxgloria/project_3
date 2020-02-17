var searchBtn = document.querySelector("button");
var div = document.querySelector("div");
// not onclick, only work on one function
searchBtn.addEventListener("click", function(e) {
  e.preventDefault();

  var title = document.querySelector("input").value;

  var options = {
    url: `http://omdbapi.com/?s=${title}&apikey=2f6435d9`,
    method: "get"
  };

  var handleResponse = function(res) {
    var movies = res.Search;

    movies.forEach(movie => {
      //create dom element p
      var elem = document.createElement("p");
      elem.textContent = movie.Title;
      // div as parents the append children to parents
      div.appendChild(elem);
    });
  };
  $.ajax(options).done(handleResponse);
});
// find all titles match the word
// extra sample
// document.querySelector('a').addEventListener('click', e => {
//   e.preventDefault();
//   console.log('khhhk');
// })
