const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({

    user : "root",
    password : "admin",
    database: "test3",
    multipleStatements : false,
})

module.exports = mysql;