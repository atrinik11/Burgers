//Dependencies
var mysql = require("mysql");

//connecting mysql to node
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bootcampsql123",
    database: "burgers_db"
});

connection.connect(function(error) {
    if (error){
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

//Exporting the connection for other files to use
module.exports = connection;
