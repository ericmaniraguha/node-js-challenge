const Pool = require('pg').Pool;

const pool = new Pool({
    user:"orane",
    password:"andela",
    host:"localhost",
    port:5432,
    database:"employe_db"
})

module.exports = pool;