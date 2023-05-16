const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({

    user: "root",
    password : "admin",
    database : "mvctoy",
    multipleStatements : true
})

module.exports = mysql;

