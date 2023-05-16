const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({

    user : "root",
    password : "admin",
    database : "test1",
    multipleStatements : true,
})

module.exports = mysql;