$(document).ready(function(){

    $("#scrape").click(function(event){
        event.preventDefault();
        console.log("the button is working");
        $.get("/scrape", function(data){
            console.log(data);
        });
    });

});
