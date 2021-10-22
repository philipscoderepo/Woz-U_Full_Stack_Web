//Makes sure the document is loaded and is ready
$(document).ready(function(){
    //uses the driver id as a target for a click event
    $("#driver").click(function(event){
        //loads the targeted url which in this case is the info.html
        $("#stage").load("info.html");
    });
});