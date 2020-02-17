const express = require("express");
// express is not bulit in module, need to npm install express,after install can require
// const that express can object and function
const app = express();
//   express_movie npm i axios
const axios = require("axios");
// ruby do end block - ruby block
// ruby block - anonynmous function

// views and view engine is built in config - setting, they know you may want to use templaing,
// but templating is not include
app.set("views", "./views");
app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.send("hello pokerface");
//   // res.send("<h1>hello pokerface</h1>");
// send() mean to use the string
//   // res.end() same
// });
app.get("/", (req, res) => {
  res.render("home");
  // render means use the template, home is the template file name
});
app.get("/about", (req, res) => {
  res.send("hello world");
  // res.end() same ; send("inside have to be string")
});

app.get("/details", (req, res) => {
  // console.log(req.method)   will log GET
  // console.log(req.query);       will log {title:jaws}
  // make a request to omdb url how use axios
  // in json , query:{title:jaw}, query for the query string ,like http://localhost:8080/details?title=titanic

  const url = `http://omdbapi.com/?t=${req.query.title}&apiKey=2f6435d9`;

  // response to show after you request,axios is async function, after request-server-omdb url-response-sendback to client
  axios.get(url).then(omdbRes => {
    // console.log(omdbRes.data.Title);
    // res.send(omdbRes.data.Year)
    // what vaiable you want to pass to the template
    res.render("details", { movie: omdbRes.data });
  });
});

// .json VS javascript object notation, json is always string including key is string; js' key can be string or something else
app.get("/api/data", (req, res) => {
  res.json({ yourData: "is here" });
  // res.json, want to make data to json format, good for json and javascript
  // http://localhost:8080/api/data    show on wen { yourData: "is here" }
});

// app.get("/api/dishes", (req, res) => {
//   dishes = [{ name: "pudding" }, { name: "cake" }];
//   res.json({ Search: dishes });
// });

// if in the dishes project

app.listen(8080);

// terminal run node server.js then open localhost:8080 can get "hello pokerface" on the web
// http://localhost:8080/about can get "hello world" on the web
