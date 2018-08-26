var connection = require("./connection.js");

// Helper function for generating My SQL syntax
// Helper function for generating MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}
	return arr.toString();
}

//Creating an object for all SQL statement function
var orm = {

    //selectAll()
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(error, result) {
            if (error) throw error;
            cb(result);
        });
    },

    //insertOne()
     insertOne: function(burger_name, callback) {
         var queryString = "INSERT INTO burgers SET ?";

         connection.query(queryString, {burger_name: burger_name, devoured: false}, function(error, result){
             if(error) throw error;
             callback(result);
         });
     },

//     // Function that insert a single table entry
// insertOne: function(table, cols, vals, cb) {
//   // Construct the query string that inserts a single row into the target table
//   var queryString = "INSERT INTO " + table;
//
//   queryString += " (";
//   queryString += cols.toString();
//   queryString += ") ";
//   queryString += "VALUES (";
//   queryString += printQuestionMarks(vals.length);
//   queryString += ") ";
//
//   // console.log(queryString);
//
//   // Perform the database query
//   connection.query(queryString, vals, function(err, result) {
//     if (err) {
//       throw err;
//     }
//
//     // Return results in callback
//     cb(result);
//   });
// },

    //updateOne()
    // updateOne: function(burgerId, callback) {
    //     var queryString = "UPDATE burgers SET ? WHERE ?";
    //
    //     connection.query(queryString, [{devoured: true}, {id: burgerId}], function(error, result){
    //         if(error) throw error;
    //         callback(result);
    //     });
    // }
    // Function that updates a single table entry
    updateOne: function(table, objColVals, condition, cb) {
  // Construct the query string that updates a single entry in the target table
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;

      // console.log(queryString);

      // Perform the database query
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }

        // Return results in callback
        cb(result);
      });
    }
};

//Exporting the orm to be used by others
module.exports = orm;
