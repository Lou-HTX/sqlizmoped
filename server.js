var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");
var sequelize = require("sequelize");
var methodOverride = require("method-override");
// ====================================================================
// Serve static content for the app from the "public" directory in the application directory.
// ====================================================================
app.use(express.static(__dirname + "/public"));
// ====================================================================
//For BodyParser
// ==================================================================== 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ====================================================================
//Override with POST having ?_method=DELETE
// ====================================================================
app.use(methodOverride('_method'));
// ====================================================================
//for handlebars
// ====================================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ====================================================================
//Routes
// ====================================================================
var routes = require("./controllers/moped_Controller.js");
app.use("/", routes);
// ====================================================================
//Sync Database
// ====================================================================
db.sequelize.sync({ force: false }).then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});
// ====================================================================
//starting express
// ====================================================================
app.listen(PORT, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err);
});