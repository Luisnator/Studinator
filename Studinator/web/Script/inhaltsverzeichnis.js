function erzeugeMenue() {
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

    listeartikel = document.getElementsByClassName(document.head.getAttribute("id"));
    for (var i = 0; i < listeartikel.length; i++) {
        artikel = listeartikel[i];
        li = document.createElement("li");
        a = document.createElement("a");
        a.setAttribute("href", "News.html?artikel=" + artikel.children[0].innerHTML.split("</h2>")[1]);
        text = document.createTextNode(artikel.children[0].innerHTML.split("</h2>")[1]);
        a.appendChild(text);
        li.appendChild(a);
        
        listetitel = artikel.children[1].children;
        for (var i = 0; i < listetitel.length; i++) {
            str = listetitel[i].innerHTML;
            ul1 = document.createElement("ul");
            li1 = document.createElement("li");
            a1 = document.createElement("a");
            a1.setAttribute("href", "")
        }
        
        ul.appendChild(li);
        
        
    }
}

window.addEventListener('load', erzeugeMenue, false);