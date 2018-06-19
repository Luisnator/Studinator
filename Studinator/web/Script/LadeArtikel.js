var statusAenderung = function () {
    if (this.readyState == 4 && this.status == 200) {
        /*um = new Umwandlung();
        //console.log(um.stringZuObjekt(this.responseText));
        list = this.response.toString().split("%20");
        for (var i = 0; i < list.length - 1; i++) {
            str = list[i];
            obj = um.stringZuObjekt(list[i]);
            if (obj.titel != undefined) {
                localStorage.setItem(obj.titel, str);
            }
        }*/
        um = new Umwandlung();
        obj = um.stringZuObjekt(JSON.stringify(JSON.parse(JSON.stringify(this.response)).news));
        if (obj.titel != undefined) {
                localStorage.setItem(obj.titel, JSON.stringify(JSON.parse(JSON.stringify(this.response)).news));
            }
        console.log(this.getAllResponseHeaders());

        initialisierung();
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function ladeArtikel() {
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Artikel/byId?id=6");
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
    requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Artikel");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderungVorschau;
    requestor.send();
}