class Umwandlung{
    constructor(){
    }
    stringZuObjekt(eingabe){
        let temp = JSON.parse(eingabe);
        temp.start = new Date(temp.start);
        temp.ende = new Date(temp.ende);
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
            case 'Kommentar' : let kommentar = Object.assign(new Kommentar(), temp);
                delete kommentar.className;
                return kommentar;
            default : return -1;
        }
    }
    objektZuString(eingabe){
        eingabe["className"] = eingabe.constructor.name;
        return JSON.stringify(eingabe);
    }
}