class Umwandlung{
    constructor(){
    }
    stringZuObjekt(eingabe){
        let temp = JSON.parse(eingabe);
        switch (temp.className){
            case 'News' : let news = Object.assign(new News(), temp);
                delete news.className;
                return news;
            
            case 'Projekt' : let projekt = Object.assign(new Projekt(), temp);
                delete projekt.className;
                return projekt;
            
            case 'Aufgabe' : let aufgabe = Object.assign(new Aufgabe(), temp);
                delete aufgabe.className;
                return aufgabe;
            default : return -1;
        }
    }
    objektZuString(eingabe){
        eingabe["className"] = eingabe.constructor.name;
        return JSON.stringify(eingabe);
    }
}

um1 = new Umwandlung();
news = new News("Lorem ipsum dolor sit...", "Consetetur sadipscing elitr.", "red", new Date('1995-12-17'), new Date('2018-05-16'), "Information", "www.somepage.de");
newsString = um1.objektZuString(news);
news1 = um1.stringZuObjekt(newsString);
console.log(newsString);
console.log(news1);