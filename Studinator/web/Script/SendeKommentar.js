var statusAenderungKommentar = function(){
    if (this.readyState == 4 && this.status == 200){
        console.log("Antwort erhalten: \n" + this.response);
        console.log(this.getAllResponseHeaders());
    }else{
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function sendeKommentar(str){
    let sender = new XMLHttpRequest();
    sender.open("POST", "http://localhost:38142/studboardRESTtwo/webresources/Kommentar");
    //sender.open("POST", "http://localhost:8080/studboardREST/webresources/Kommentar");
    sender.setRequestHeader("Content-type", "application/json");
    sender.onreadystatechange = statusAenderungKommentar;
    sender.send(str);
}