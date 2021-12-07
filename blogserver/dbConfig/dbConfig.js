const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogmaker",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("You are now connected...");
  conn.query("Create Database if not exists blogmaker", (err) => {
    console.log("Database Created");
  });
});

module.exports = conn;
