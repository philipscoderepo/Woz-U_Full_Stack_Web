function regexChecker(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('fname').value;
    var specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    //Check that the names are more than one character
    if(firstName.length > 1 && lastName.length > 1){
        //Check that none of the characters match the special characters
        if(!specialChars.test(firstName) && !specialChars.test(lastName)){
            //Check that the first characters are capitalized 
            if(firstName[0] == firstName[0].toUpperCase() && lastName[0] == lastName[0].toUpperCase()){
                alert("Yay! Your inputs were all correct!");
                return;
            }
        }
    }
    alert("Oh no! Thats an invalid format!");
}

