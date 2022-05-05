require("dotenv").config();
const pw = process.env.pw;
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "asim",
  password: pw,
  database: "TODO",
});
connection.connect((error) => {
  if (error) {
    throw error;
  } else {
    console.log("Connection Successfull");
  }
});
module.exports = connection;
