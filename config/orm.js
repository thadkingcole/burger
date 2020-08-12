// * required modules
const connection = require("./connection");

// * orm object creation
const orm = {
  selectAll(cb) {
    // only 1 table exists to select from
    const queryStr = "SELECT * FROM burgers";
    connection.query(queryStr, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  // TODO: develop insertOne() function
  insertOne(burgerIn, cb) {
    // burgerIn is object with keys corresponding to burgers table column names
    const queryStr = "INSERT INTO burgers SET ?";
    connection.query(queryStr, burgerIn, (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne() {
    // TODO: develop updateOne() function
  },
};

// * export this module
module.exports = orm;
