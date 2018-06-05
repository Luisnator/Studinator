function erzeugeMenue(){
    nav = document.createElement("nav");
    nav.setAttribute("id", "nav");
    nav.setAttribute("style", "position:fixed;right:0;top:50%;");
    
    header = document.createElement("header");
    h2 = document.createElement("h2");
    texttitel = document.createTextNode("Navigation");
    h2.appendChild(texttitel);
    header.appendChild(h2);
    nav.appendChild(header);
    
    ul = document.createElement("ul");
    listart = document.createElement("li");
    astart = document.createElement("a");
    astart.setAttribute("href", "index.html");
    textstart = document.createTextNode("Startseite");
    astart.appendChild(textstart);
    listart.appendChild(astart);
    ul.appendChild(listart);
    
    linews = document.createElement("li");
    anews = document.createElement("a");
    anews.setAttribute("href", "News.html");
    textnews = document.createTextNode("News");
    anews.appendChild(textnews);
    linews.appendChild(anews);
    ul.appendChild(linews);
    
    liprojekt = document.createElement("li");
    aprojekt = document.createElement("a");
    aprojekt.setAttribute("href", "Projekte.html");
    textprojekt = document.createTextNode("Projekte");
    aprojekt.appendChild(textprojekt);
    liprojekt.appendChild(aprojekt);
    ul.appendChild(liprojekt);
    
    liaufgabe = document.createElement("li");
    aaufgabe = document.createElement("a");
    aaufgabe.setAttribute("href", "Aufgaben.html");
    textaufgabe = document.createTextNode("Aufgaben");
    aaufgabe.appendChild(textaufgabe);
    liaufgabe.appendChild(aaufgabe);
    ul.appendChild(liaufgabe);
    
    lineu = document.createElement("li");
    aneu = document.createElement("a");
    aneu.setAttribute("href", "NeuerArtikel.html");
    textneu = document.createTextNode("Neuen Artikel anlegen");
    aneu.appendChild(textneu);
    lineu.appendChild(aneu);
    ul.appendChild(lineu);
    
    nav.appendChild(ul);
    document.body.appendChild(nav);
}

window.addEventListener('load', erzeugeMenue, false);