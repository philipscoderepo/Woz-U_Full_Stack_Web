//Handles the hover function
$(document).ready(function(){
    //if hover event is triggered the color of the header turns green
    $("header").hover(function(){
        $(this).css("background-color", "rgb(0, 88, 88)");
    }, function(){
        $(this).css("background-color", "lightcoral");
    });
});

//Handles the changing text
$(document).ready(function(){
    $("p").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which you would have to write yourself before jQuery, and compresses it.");
    });
});

//Handles removing items from the list 
$(document).ready(function(){
    $("li").dblclick(function(){
        $(this).hide();
    });
});

//When typing an input, on key down this toggles
$(document).ready(function(){
    $("input").keydown(function(){
        $(this).toggleClass("input");
    });
});