const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'isra0802',
    database: 'colegio'
})



module.exports = connection