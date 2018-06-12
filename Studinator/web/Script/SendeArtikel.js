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
    sender.open("POST", "http://localhost:8080/studfileserver/json/blank.json");
    sender.setRequestHeader("Content-type", "application/json");
    sender.onreadystatechange = statusAenderung;
    sender.send(str);
}





var xhr = new XMLHttpRequest();
xhr.open("PUT", '/server', true);

xhr.setRequestHeader("Content-type", "application/json");

xhr.onreadystatechange = function() {//Call a function when the state changes.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        // Request finished. Do processing here.
    }
}
xhr.send("foo=bar&lorem=ipsum"); 
// xhr.send(new Blob()); 
// xhr.send(new Int8Array()); 
// xhr.send(document);