var statusAenderungKommentare = function () {
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
        console.log(this.response);
        um = new Umwandlung();
        //obj = um.stringZuObjekt(JSON.stringify(JSON.parse(JSON.stringify(this.response)).kommentar));
        console.log(this.getAllResponseHeaders());
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function ladeKommentar() {
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Kommentar/byId?id=6");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderungKommentare;
    requestor.send();
}


var statusAenderungKommentarVorschau = function () {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.response);
        console.log(this.getAllResponseHeaders());
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};

function ladeKommentarVorschau(){
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:8080/studboardREST/webresources/Kommentar");
    requestor.responseType = "json";
    requestor.onreadystatechange = statusAenderungKommentarVorschau;
    requestor.send();
}

function testfunc(){
    ladeKommentarVorschau();
    ladeKommentar();
}

window.addEventListener('load', testfunc, false);