let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        //Parse the json file into a new object
        let myObj = JSON.parse(this.responseText);
        //assign the name to the html object id example
        document.getElementById("example").innerHTML = myObj.age;
    }
};
newRequest.open("GET", "new.json", true);
newRequest.send();

