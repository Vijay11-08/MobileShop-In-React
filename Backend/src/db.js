const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "your_database",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = db;
