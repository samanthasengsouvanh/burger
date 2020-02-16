// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "zjao171ef3d6qgae",
  password: "dmlbq7egxhap5pzx",
  database: "d8q2gi2r13bgsx14"

// host: "127.0.0.1",
// port:8889,
// user:"root",
// password:"root",
// database:"burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
