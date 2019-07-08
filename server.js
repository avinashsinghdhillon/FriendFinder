// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
//var individuals =  require("./app/data/friends.js");
//var htmlRoutes = require("./app/routing/htmlRoutes.js");
//var apiRoutes = require("./app/routing/apiRoutes.js");
//var newIndividual;
//var returnMatch;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
