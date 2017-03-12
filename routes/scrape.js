var scrape = require("../controllers/scrapeController.js");

module.exports = function(app){

    console.log("scrape is connected");
    app.get("/scrape", scrape.performScrape);

};