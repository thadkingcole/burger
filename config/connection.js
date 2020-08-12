// * required modules
require("dotenv").config(); // use environment variables
const mysql = require("mysql");

// * Set up MySQL connection.
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "burgers_db",
});

// * Make connection.
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

// * Export connection for our ORM to use.
module.exports = connection;
