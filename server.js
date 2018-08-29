//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var router = require("./controllers/burgers_controller.js");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

//Sets up the express ap to handle data parsing
app.use(bodyParser.urlencoded({extended: true}));

//Parse application /json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// app.use("/", router);
app.use( router);
// Start the server so that it can begin listening to client request
app.listen(PORT, function(){
  console.log("Server is listening on: http://localhost:" + PORT);
});
