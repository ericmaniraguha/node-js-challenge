const Pool = require('pg').Pool;

const pool = new Pool({
    user:"postgres",
    password:"pass@123",
    host:"localhost",
    port:5432,
    database:"employe_db"
})

module.exports = pool;