
const mysql2 = require("mysql2/promise");

const mysql = mysql2.createPool({

    user : "root",
    password : "admin",
    database : "test",
    multipleStatements : true
}) 

mysql.getConnection((err)=>{

    console.log(err);
})

module.exports = mysql;