var statusAenderung = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.stringify(this.response));
        um = new Umwandlung();
        obj = um.stringZuObjekt(JSON.stringify(this.response));
        console.log(obj);
        if (obj.titel != undefined) {
                localStorage.setItem(obj.titel, JSON.stringify(this.response));
            }
        console.log(this.getAllResponseHeaders());

        initialisierung();
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function ladeArtikel() {
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:38142/studboardREST2/webresources/Artikel/byId?id=6");
    //requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Artikel/byId?id=6");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderung;
    requestor.send();
}


var statusAenderungVorschau = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        console.log(this.getAllResponseHeaders());
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};

function ladeArtikelVorschau(){
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:8080/studboardREST2/webresources/Artikel");
    //requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Artikel");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderungVorschau;
    requestor.send();
}