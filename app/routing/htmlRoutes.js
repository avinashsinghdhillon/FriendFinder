var path = require("path");

module.exports = function(app){
    //gets the survey route
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
    });

    //Gets the home route
    app.get("*", function(req, res){
        res.sendfile(path.join(__dirname, "../../app/public/home.html"));
    });
};