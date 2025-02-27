const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mobileshop",
  password: "",// here pass
  port: 5432, // default PostgreSQL port
  max: 20,
});

module.exports = pool; // ✅ Directly export the pool object
