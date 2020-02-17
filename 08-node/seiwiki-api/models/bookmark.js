const db = require("../db/db");

function all() {
  return db.query("select * from bookmarks;");
}

function create(params) {
  return db.query("insert into bookmarks;", params);
}
function findById(id) {
  return db.query("select where", [id]);
}

module.exports = {
  all: all,
  create: create,
  findById: findById
};
