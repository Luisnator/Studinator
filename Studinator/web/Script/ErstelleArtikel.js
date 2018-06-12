function artikelErstellen() {
    if (location.search.length > 0) {
        paramlist = location.search.split("?")[1].split("&");
        if (paramlist.length == 7) {
            var artikel;
            if (paramlist[2].split("=")[1] == "News") {
                //inhalt, titel, titelfarbe, start, ende, kategorie, quelle
                artikel = Creator.createNews(paramlist[1].split("=")[1], paramlist[0].split("=")[1], paramlist[5].split("=")[1], new Date(paramlist[3].split("=")[1]), new Date(paramlist[4].split("=")[1]), "", "");
            } else if (paramlist[2].split("=")[1] == "Projekt") {
                //inhalt, titel, titelfarbe, start, ende, professor, anzPlaetze
                artikel = Creator.createProjekt(paramlist[1].split("=")[1], paramlist[0].split("=")[1], paramlist[5].split("=")[1], new Date(paramlist[3].split("=")[1]), new Date(paramlist[4].split("=")[1]), "", "");
            } else if (paramlist[2].split("=")[1] == "Aufgaben") {
                //inhalt, titel, titelfarbe, start, ende, fach
                artikel = Creator.createAufgabe(paramlist[1].split("=")[1], paramlist[0].split("=")[1], paramlist[5].split("=")[1], new Date(paramlist[3].split("=")[1]), new Date(paramlist[4].split("=")[1]), "");
            }
            um = new Umwandlung();
            sendeArtikel(um.objektZuString(artikel));
        }
    }
}

window.addEventListener('load', artikelErstellen, false);