const mysql  = require("mysql");

exports.mysql = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "lae1282*",
  database : "escoteiros"
});
