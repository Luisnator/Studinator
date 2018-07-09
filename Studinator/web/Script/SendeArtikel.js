var statusAenderung = function(){
    if (this.readyState == 4 && this.status == 200){
        console.log("Antwort erhalten: \n" + this.response);
        console.log(this.getAllResponseHeaders());
    }else{
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function sendeArtikel(str){
    let sender = new XMLHttpRequest();
    sender.open("POST", "http://localhost:8080/studboardREST2/webresources/Artikel");
    //sender.open("POST", "http://localhost:8080/studboardREST/webresources/Artikel");
    sender.responseType = "json";
    sender.setRequestHeader("Content-type", "application/json");
    sender.onreadystatechange = statusAenderung;
    sender.send(str);
}