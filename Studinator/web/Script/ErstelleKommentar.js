function kommentarErstellen() {
    if (location.search.length > 0) {
        paramlist = location.search.split("?")[1].split("&");
        if (paramlist.length == 4) {
            var kommentar;
            var bewertung = 0;
            if(paramlist[2].split("=")[0] == "bewertung1"){
                bewertung = 1;
            }else if(paramlist[2].split("=")[0] == "bewertung2"){
                bewertung = 2;
            }else if(paramlist[2].split("=")[0] == "bewertung3"){
                bewertung = 3;
            }else if(paramlist[2].split("=")[0] == "bewertung4"){
                bewertung = 4;
            }else if (paramlist[2].split("=")[0] == "bewertung5"){
                bewertung = 5;
            }
            console.log(paramlist[0].split("=")[1]);
            console.log(bewertung);
            kommentar = new Kommentar(paramlist[0].split("=")[1], bewertung);
            console.log(kommentar);
            um = new Umwandlung();
            sendeKommentar(um.objektZuString(kommentar));
        }
    }
}

window.addEventListener('load', kommentarErstellen, false);