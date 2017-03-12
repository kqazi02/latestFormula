//initialize the npm packages
var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Allows the app to use PUT and DELETE methods
app.use(methodOverride("_method"));

// sets up handlebars to deploy HTML pages
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// routes
require("./routes/scrape.js")(app);
require("./routes/articles.js")(app);

// deploy the app
// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});