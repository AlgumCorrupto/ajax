function ajaxRequest () {
    const request = new XMLHttpRequest();

    request.onload = () => 
        document.getElementById("ajax").innerHTML = request.responseText;
    
    request.open("GET", "./index.php?nome=Higor");

    request.send();
}

ajaxRequest()


