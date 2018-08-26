var orm = require("../config/orm.js");

var burgers = {
    //Selecting all the burgers from the database
    selectAll:function(callback) {
      orm.selectAll("burgers", function(result){
          callback(result);
      });
    },

    //Inserting one burger to the database
    insertOne:function(burger_name, callback){
       orm.insertOne(burger_name, function(result){
         callback(result);
       });
    },
  //   insertOne: function(cols, vals, callback) {
  //   orm.insertOne('burgers', cols, vals, function(result) {
  //     callback(result);
  //   });
  // },

    //Updating one burger in the database
    updateOne:function(objColVals, condition, callback){
      orm.updateOne("burgers", objColVals, condition, function(result){
          callback(result);
      });
    }
};

module.exports = burgers;
