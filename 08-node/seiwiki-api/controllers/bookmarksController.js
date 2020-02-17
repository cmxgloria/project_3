//mini router
const express = require("express");
const router = express.Router();
// const db = require("../db/db.js");
const Bookmarks = require("../models/bookmark");
// read
router.get("/bookmarks", (req, res) => {
  // make a request to an api
  // Giphy.search()

  Bookmarks.all()
    // .query("SELECT * FROM bookmarks;")
    .then(results => res.json({ data: results.rows }));
});

// create
router.post("/bookmarks", (req, res) => {
  // db.query(
  //   "INSERT INTO bookmarks(url, description) VALUES ($1, $2) RETURNING *;",
  //   [req.body.url, req.body.description]
  // )
  //   // async so put then to finish first
  //   .then(results => {
  //     res.json({ results: results.rows });
  Bookmarks.create(req.body).then(results => {
    res.json({ results: results.rows });
  });
});

// app.listen(port, () => {
//   console.log(`seiwiki api listening on ${port}`);
// });
module.exports = router;
