var orm = require("../config/orm.js");

var burger = {
    //Selecting all the burgers from the database
    selectAll:function(cb) {
      orm.selectAll("burgers", function(result){
          cb(result);
      });
    },

    //Inserting one burger to the database
    insertOne:function(burger_name, cb){
       orm.insertOne(burger_name, function(result){
         cb(result);
       });
    },
  //   insertOne: function(cols, vals, cb) {
  //   orm.insertOne('burgers', cols, vals, function(result) {
  //     cb(result);
  //   });
  // },

    //Updating one burger in the database
    updateOne:function(objColVals, condition, cb){
      orm.updateOne("burgers", objColVals, condition, function(result){
          cb(result);
      });
    }
};

module.exports = burger;
