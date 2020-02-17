// talk to api and get information then show on the web app
const section = document.querySelector("section");
// maybe we need axios to make http request
const url = "http://localhost:8080/api/horses";
// axios.get(url).then(res => {
//   // for dom- we have dom api or jquery
//   console.log(res.data);
// });
// lodash is for utility functions

axios.get(url).then(res => {
  console.log(res);
  // for dom- we have dom api or jquery
  res.data.forEach(horse => {
    const elem = document.createElement("h2");
    elem.textContent = horse.name;
    section.appendChild(elem);
  });
});
