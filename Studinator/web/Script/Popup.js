var fenster = window.open("../Studinator/Popup.html","popup","width=400,height=200");
fenster.onload = function(){
    if (navigator.language =='de-DE'){
        fenster.document.getElementById("nachricht").innerHTML = "Hallo Nutzer!";
    }else if (navigator.language =='en'){
        fenster.document.getElementById("nachricht").innerHTML = "Hello User!";
    }
}