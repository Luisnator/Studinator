var statusAenderungKommentare = function () {
    if (this.readyState == 4 && this.status == 200) {
        um = new Umwandlung();
        obj = um.stringZuObjekt(JSON.stringify(this.response));
        console.log(JSON.stringify(this.response));
        console.log(obj);
        console.log(this.getAllResponseHeaders());
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function ladeKommentar() {
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:38142/studboardRESTtwo/webresources/Kommentar/byId?id=6");
    //requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Kommentar/byId?id=6");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderungKommentare;
    requestor.send();
}


var statusAenderungKommentarVorschau = function () {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.response);
        //console.log(this.getAllResponseHeaders());
    } else {
        //console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};

function ladeKommentarVorschau(){
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:38142/studboardRESTtwo/webresources/Kommentar");
    //requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Kommentar");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderungKommentarVorschau;
    requestor.send();
}

function testfunc(){
    ladeKommentarVorschau();
    ladeKommentar();
}

window.addEventListener('load', testfunc, false);