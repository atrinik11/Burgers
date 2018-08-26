//Dependencies
var express = require("express");
var router = express.Router();
//Import the model(burger.js) to use the database function
var burger = require("../models/burgers.js");

//Creating all the Routes
//Displaying all data in the database in html

//Get all burgers
 router.get("/", function(request, response){
   burger.selectAll(function(data){
     var hbsObject = {
       burgers:data
     };
     console.log(hbsObject);
     response.render("index", hbsObject);
   });
 });

//Creating a new burgers
 router.post("/burgers/create", function(request, response){
   burger.insertOne(request.body.burger_name, function(data){
     response.json({id: data.insertId});
   });
 });

// router.post("/burgers", function(request, response){
//   burger.insertOne(["burger_name", "devoured"], [request.body.burger_name, false], function(data){
//     response.json({id: data.insertId});
//     response.redirect("/")
//   });
// });

//Devour a burgers
router.put("/burgers/:id", function(request, response){
   var condition = "id = " + request.params.id;
  // console.log("Condition: ", condition);
  burger.updateOne({
    devoured: true}, condition,
    function(data){
      if(data.changedRows === 0){
        return response.status(404).end();
      }else {
        response.status(200);
        console.log("You just ate a burger!!");
        //response.redirect(("/index"));
      }
  });
});

//Export Routes
module.exports = router;
