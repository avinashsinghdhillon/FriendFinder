var individuals =  require("../../app/data/friends.js");

module.exports = function(app){
    // Displays all individuals
    app.get("/api/individuals", function(req, res) {
        return res.json(individuals);
    });

    //posts new survey and returns best match
    app.post("/api/individuals", function(req, res) {

        var newFriend = req.body;
        individuals.push(newFriend);
        var bestMatch = findMatch(newFriend);
        res.json(bestMatch);
        //newIndividual = newFriend;
    });
};

function findMatch(newUser){
    var bestMatchScore = 0;
    var bestMatchIndex = 0;
    //loop through all the individuals except the NEW one in the end to compare survey answers
    for (var i = 0; i <= individuals.length - 2; i++){
        var currentMatchScore = 0;
        for(var j = 0; j < 10; j++){
            currentMatchScore += Math.abs(individuals[i].scores[j] - newUser.scores[j]);
        }
        if(i === 0 || currentMatchScore < bestMatchScore){
            bestMatchScore = currentMatchScore;
            bestMatchIndex = i;
        }
    }
    returnMatch = individuals[bestMatchIndex];
    return returnMatch;
}