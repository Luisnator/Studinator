var vokabelMap = new Map();

startseite = new Object(); startseite.de = "Startseite"; startseite.en = "Homepage";
news = new Object(); news.de = "News"; news.en = "News";
projekt = new Object(); projekt.de = "Projekt"; projekt.en = "Project";
aufgabe = new Object(); aufgabe.de = "Aufgabe"; aufgabe.en = "Task";
menue = new Object(); menue.de = "Menü"; menue.en = "Menu";
navigation = new Object(); navigation.de = "Navigation"; navigation.en = "Navigation";
neuerArtikel = new Object(); neuerArtikel.de = "Neuen Artikel anlegen"; neuerArtikel.en = "Create new article";
kommentar = new Object(); kommentar.de = "Kommentar"; kommentar.en = "Comment";
bewertung = new Object(); bewertung.de = "Bewertung"; bewertung.en = "Rating";
datei = new Object(); datei.de = "Datei"; datei.en = "File";

vokabelMap.set("Startseite", startseite);
vokabelMap.set("News", news);
vokabelMap.set("Projekt", projekt);
vokabelMap.set("Aufgabe", aufgabe);
vokabelMap.set("Menü", menue);
vokabelMap.set("Navigation", navigation);
vokabelMap.set("NeuerArtikel", neuerArtikel);
vokabelMap.set("Kommentar", kommentar);
vokabelMap.set("Bewertung", bewertung);
vokabelMap.set("Datei", datei);


function setzeDE(){
    document.getElementById("nav").children[0].children[0].innerHTML = vokabelMap.get("Navigation").de;
    document.getElementById("nav").children[1].children[0].firstChild.innerHTML = vokabelMap.get("Startseite").de;
    document.getElementById("nav").children[1].children[1].firstChild.innerHTML = vokabelMap.get("News").de;
    document.getElementById("nav").children[1].children[2].firstChild.innerHTML = vokabelMap.get("Projekt").de;
    document.getElementById("nav").children[1].children[3].firstChild.innerHTML = vokabelMap.get("Aufgabe").de;
    document.getElementById("nav").children[1].children[4].firstChild.innerHTML = vokabelMap.get("NeuerArtikel").de;
    
    if (document.body.getElementsByClassName("kommentar").length != 0){
        let liste = document.body.getElementsByClassName("kommentar");
        for (var i = 0; i < liste.length; i++) {
            liste[i].children[0].children[0].innerHTML = vokabelMap.get("Kommentar").de;
            liste[i].children[0].children[2].innerHTML = vokabelMap.get("Datei").de;
            liste[i].children[0].children[4].innerHTML = vokabelMap.get("Bewertung").de;
        }
    }
}

function setzeEN(){
     document.getElementById("nav").children[0].children[0].innerHTML = vokabelMap.get("Navigation").en;
    document.getElementById("nav").children[1].children[0].firstChild.innerHTML = vokabelMap.get("Startseite").en;
    document.getElementById("nav").children[1].children[1].firstChild.innerHTML = vokabelMap.get("News").en;
    document.getElementById("nav").children[1].children[2].firstChild.innerHTML = vokabelMap.get("Projekt").en;
    document.getElementById("nav").children[1].children[3].firstChild.innerHTML = vokabelMap.get("Aufgabe").en;
    document.getElementById("nav").children[1].children[4].firstChild.innerHTML = vokabelMap.get("NeuerArtikel").en;
    
    if (document.body.getElementsByClassName("kommentar").length != 0){
        let liste = document.body.getElementsByClassName("kommentar");
        for (var i = 0; i < liste.length; i++) {
            liste[i].children[0].children[0].innerHTML = vokabelMap.get("Kommentar").en;
            liste[i].children[0].children[2].innerHTML = vokabelMap.get("Datei").en;
            liste[i].children[0].children[4].innerHTML = vokabelMap.get("Bewertung").en;
        }
    }
}


window.onload = function() {

    if (navigator.language =='de-DE'){
        setzeDE();
    }else if (navigator.language =='en'){
        setzeEN();
    }
    //console.log(document.getElementById("nav").children[1].children[0].firstChild.innerHTML);
    
}