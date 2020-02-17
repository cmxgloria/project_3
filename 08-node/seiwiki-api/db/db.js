const pg = require("pg");
const pool = new pg.Pool({ database: "seiwiki" });
// const router = express.Router();

module.exports = {
  query: (sql, params) => {
    return pool.query(sql);
  }
};
