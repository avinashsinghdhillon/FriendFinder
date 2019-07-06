// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var individuals =  require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var newIndividual;
var returnMatch;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(htmlRoutes.home);
app.get("/", function(request, response){
    response.sendfile(path.join(__dirname, htmlRoutes.home))
});

var surveyRoute = app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, htmlRoutes.survey));
});

// Displays all individuals
console.log(apiRoutes.individuals)
var apiIndividuals =  app.get(apiRoutes.individuals, function(req, res) {
return res.json(individuals);
});


app.post(apiRoutes.individuals, function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    debugger;
    var newFriend = req.body;
    individuals.push(newFriend);
    res.json(newFriend);
    newIndividual = newFriend;
    findMatch();
});

function findMatch(){
    debugger;
    var bestMatchScore = 0;
    var bestMatchIndex = 0;
    //loop through all the individuals except the NEW one in the end to compare survey answers
    for (var i = 0; i <= individuals.length - 2; i++){
        var currentMatchScore = 0;
        for(var j = 0; j < 10; j++){
            currentMatchScore += Math.abs(individuals[i].scores[j] - newIndividual.scores[j]);
            console.log(i, j, bestMatchScore,  currentMatchScore);
        }
        if(i === 0 || currentMatchScore < bestMatchScore){
            bestMatchScore = currentMatchScore;
            bestMatchIndex = i;
        }
    }
    returnMatch = individuals[bestMatchIndex];
    console.log("bestMatchScore: " + bestMatchIndex);
    console.log(returnMatch);
}


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});


