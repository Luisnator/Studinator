var statusAenderung = function () {
    if (this.readyState == 4 && this.status == 200) {
        um = new Umwandlung();
        //console.log(um.stringZuObjekt(this.responseText));
        list = this.response.toString().split("%20");
        for (var i = 0; i < list.length - 1; i++) {
            str = list[i];
            obj = um.stringZuObjekt(list[i]);
            if (obj.titel != undefined) {
                localStorage.setItem(obj.titel, str);
            }
        }
        ;
        //console.log("Antwort erhalten: \n" + this.response);
        console.log(this.getAllResponseHeaders());

        initialisierung();
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function ladeArtikel() {
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:8080/studfileserver/SendeArtikel");
    //requestor.open("GET", "http://localhost:8080/studfileserver/json/news1.json");
    requestor.responseType = "";
    requestor.onreadystatechange = statusAenderung;
    requestor.send();
}