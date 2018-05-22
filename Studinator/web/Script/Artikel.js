/* global Umwandlung */

class Artikel {
    constructor(inhalt, titel, titelfarbe, start, ende){
        this.inhalt = inhalt;
        this.titel = titel;
        this.titelfarbe = titelfarbe;
        this.start = start;
        this.ende = ende;
    }
}

class News extends Artikel {
    constructor(inhalt, titel, titelfarbe, start, ende, kategorie, quelle){
        super(inhalt, titel, titelfarbe, start, ende);
        this.kategorie = kategorie;
        this.quelle = quelle;
    }
}

class Projekt extends Artikel {
    constructor(inhalt, titel, titelfarbe, start, ende, professor, anzPlaetze){
        super(inhalt, titel, titelfarbe, start, ende);
        this.kategorie = professor;
        this.quelle = anzPlaetze;
    }
}

class Aufgabe extends Artikel {
    constructor(inhalt, titel, titelfarbe, start, ende, fach){
        super(inhalt, titel, titelfarbe, start, ende);
        this.fach = fach;
    }
}

class Creator {
    static createNews(inhalt, titel, titelfarbe, start, ende, kategorie, quelle){
        let temp = this.inStorage(titel);
        if (temp == false){
            console.log("regulär");
            let news = new News(inhalt, titel, titelfarbe, start, ende, kategorie, quelle);
            this.zuStorage(news);
            return news;
        }else{
            console.log("aus storage");
            return temp;
        }
    }
    static createProjekt(inhalt, titel, titelfarbe, start, ende, professor, anzPlaetze){
        let temp = this.inStorage(titel);
        if (temp == false){
            console.log("regulär");
            let projekt = new Projekt(inhalt, titel, titelfarbe, start, ende, professor, anzPlaetze);
            this.zuStorage(projekt);
            return projekt;
        }else{
            console.log("aus storage");
            return temp;
        }
    }
    static createAufgabe(inhalt, titel, titelfarbe, start, ende, fach){
        let temp = this.inStorage(titel);
        if (temp == false){
            console.log("regulär");
            let aufgabe = new Aufgabe(inhalt, titel, titelfarbe, start, ende, fach);
            this.zuStorage(aufgabe);
            return aufgabe;
        }else{
            console.log("aus storage");
            return temp;
        }
    }
    static inStorage(titel){
        let temp = localStorage.getItem(titel);
        let um = new Umwandlung();
        if (temp != null){
            return um.stringZuObjekt(temp);
        }else{
            return false;
        }
    }
    static zuStorage(obj){
        let um = new Umwandlung();
        localStorage.setItem(obj.titel, um.objektZuString(obj));
    }
}

news1 = Creator.createNews("Lorem ipsum dolor sit...", "Consetetur sadipscing elitr.", "red", new Date('1995-12-17'), new Date('2018-05-16'), "Information", "www.somepage.de");
console.log(news1);
projekt1 = Creator.createProjekt("No sea takimata sanctus est...", "Magna aliquyam erat!", "green", new Date('2017-10-17'), new Date('2018-10-17'), "Mustermann", 3);
console.log(projekt1);
aufgabe1 = Creator.createAufgabe("Sed diam nonumy eirmod tempor...", "Sed diam voluptua.", "blue", new Date('2018-01-01'), new Date('2019-01-01'), "Mathe 2.0");
console.log(aufgabe1);
news2 = Creator.createNews("No sea takimata sanctus...", "Nonumy eirmod tempor.", "red", new Date('2015-11-19'), new Date('2018-07-22'), "Aenderung", "www.someOtherpage.de");
console.log(news2);
//news1 = new News("Lorem ipsum dolor sit...", "Consetetur sadipscing elitr.", "red", new Date('1995-12-17'), new Date('2018-05-16'), "Information", "www.somepage.de");
//projekt1 = new Projekt("No sea takimata sanctus est...", "Magna aliquyam erat!", "green", new Date('2017-10-17'), new Date('2018-10-17'), "Mustermann", 3);
//aufgabe1 = new Aufgabe("Sed diam nonumy eirmod tempor...", "Sed diam voluptua.", "blue", new Date('2018-01-01'), new Date('2019-01-01'), "Mathe 2.0");
//news2 = new News("No sea takimata sanctus...", "Nonumy eirmod tempor.", "red", new Date('2015-11-19'), new Date('2018-07-22'), "Aenderung", "www.someOtherpage.de");