var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");

module.exports = {

    performScrape : function(req, res){

        console.log("scrapeController is working");
        request("https://www.motorsport.com/f1/news/", function(error, response, html) {
            // Load the HTML into cheerio
            var $ = cheerio.load(html);

            // Make an empty array for saving our scraped info
            var result = [];

             // With cheerio, look at each headline, enclosed in "div" tags with the class name "article"
            $("div.article").each(function(i, element) {

                var articleLink = $(element).find("h3").find("a").attr("href");
                var headline = $(element).find("h3").find("a").text();

                console.log(articleLink);
                console.log(headline);

            });
        
        });

    }

};