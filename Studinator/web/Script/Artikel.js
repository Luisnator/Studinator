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

news1 = new News("Lorem ipsum dolor sit...", "Consetetur sadipscing elitr.", "red", new Date('1995-12-17'), new Date('2018-05-16'), "Information", "www.somepage.de");
projekt1 = new Projekt("No sea takimata sanctus est...", "Magna aliquyam erat!", "green", new Date('2017-10-17'), new Date('2018-10-17'), "Mustermann", 3);
aufgabe1 = new Aufgabe("Sed diam nonumy eirmod tempor...", "Sed diam voluptua.", "blue", new Date('2018-01-01'), new Date('2019-01-01'), "Mathe 2.0");
news2 = new News("No sea takimata sanctus...", "Nonumy eirmod tempor.", "red", new Date('2015-11-19'), new Date('2018-07-22'), "Aenderung", "www.someOtherpage.de");
console.log(news1);
console.log(projekt1);
console.log(aufgabe1);
console.log(news2);