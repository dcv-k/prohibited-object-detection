const mysql = require("mysql2")

let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "prohibited_object_detection"
})

module.exports = { connection }