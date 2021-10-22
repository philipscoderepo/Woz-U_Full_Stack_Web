function loadDoc(){
    //Declare the XMLHttpRequest variable
    const xhttp = new XMLHttpRequest();
    //Create the new XMLHttpRequest object by establishing the onreadystatechange
    xhttp.onreadystatechange = function(){
        //if the ready state is equal to 4 then the request is finished and a response is ready
        //if the ready state is equal to 200 that means the status is "ok"
        if(this.readyState == 4 && this.status == 200){
            //manipulate the example div
            document.getElementById("example").innerHTML = this.responseText;
        }
    };
    //GET method, info.txt, use true to set asynchronous state to true
    xhttp.open("GET", "info.txt", true);
    //Send the request
    xhttp.send();
}