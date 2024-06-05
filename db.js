/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    user: "client",
    password: "password",
    host: 'localhost',
    port: 5432,
    database: 'lunchly'
});

db.connect();

module.exports = db;
