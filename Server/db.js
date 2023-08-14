const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "uffa",
    host: "localhost",
    port: 5432,
    database: "pizzarium"
});

module.exports = pool;
