// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var individuals =  require("./app/data/friends.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());