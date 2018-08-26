//Dependencies
var mysql = require("mysql");

//connecting mysql to node
var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
};


connection.connect(function(error) {
    if (error){
        console.error("error connecting: " + error.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

//Exporting the connection for other files to use
module.exports = connection;
