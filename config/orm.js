// * required modules
const connection = require("./connection");

// * orm object creation
const orm = {
  selectAll(cb) {
    // only 1 table exists to select from
    const queryStr = `SELECT * FROM burgers`;
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne() {
    // TODO: develop insertOne() function
  },
  updateOne() {
    // TODO: develop updateOne() function
  },
};

// * export this module
module.exports = orm;
