function artikelErsteller(anzahlArtikel) {
    seite = document.head.getAttribute("id");
    var keyListe = Object.keys(localStorage).reverse();
    for (var i = 0; i < keyListe.length && i < anzahlArtikel; i++) {
        artikel = Creator.inStorage(keyListe[i]);
        if (seite == "Startseite" || artikel.constructor.name == seite) {
            element = document.createElement("article");
            element.setAttribute("class", artikel.constructor.name)
            //br = document.createElement("br");

            header = document.createElement("header");
            h2 = document.createElement("h2");
            textklasse = document.createTextNode(artikel.constructor.name);
            h2.appendChild(textklasse);
            header.appendChild(h2);
            texttitel = document.createTextNode(artikel.titel);
            header.appendChild(texttitel);
            element.appendChild(header);

            p = document.createElement("p");
            if (artikel.inhalt.length > 150 && seite == "Startseite") {
                p.innerHTML = artikel.inhalt.slice(0, 150) + "...";
                //textinhalt = document.createTextNode(artikel.inhalt.slice(0, 150) + "...");
            } else {
                p.innerHTML = artikel.inhalt;
                //textinhalt = document.createTextNode(artikel.inhalt);
            }
            element.appendChild(p);

            if (seite == "Startseite") {
                footer = document.createElement("footer");
                a = document.createElement("a");
                if (artikel.constructor.name == "News") {
                    a.setAttribute("href", "News.html?artikel=" + artikel.titel);
                } else if (artikel.constructor.name == "Projekt") {
                    a.setAttribute("href", "Projekte.html?artikel=" + artikel.titel);
                } else if (artikel.constructor.name == "Aufgabe") {
                    a.setAttribute("href", "Aufgaben.html?artikel=" + artikel.titel);
                }
                textlink = document.createTextNode("Lesen sie hier weiter");
                a.appendChild(textlink);
                footer.appendChild(a);
                textfooter1 = document.createTextNode("Copyright© Studinator");
                textfooter2 = document.createTextNode("Kontakt:support@service.com")
                footer.appendChild(document.createElement("br"));
                footer.appendChild(textfooter1);
                footer.appendChild(document.createElement("br"));
                footer.appendChild(textfooter2);
                element.appendChild(footer);
            } else {
                form = document.createElement("form");
                form.setAttribute("class", "kommentar");
                form.setAttribute("action", "./"+document.head.getAttribute("id")+".html");
                form.setAttribute("method", "GET");
                form.setAttribute("id", i);

                fieldset = document.createElement("fieldset");

                labelkom = document.createElement("label");
                labelkom.setAttribute("for", "textfield");
                textlabelkom = document.createTextNode("Kommentar:");
                labelkom.appendChild(textlabelkom);
                fieldset.appendChild(labelkom);

                inputtext = document.createElement("input");
                inputtext.setAttribute("type", "text");
                inputtext.setAttribute("name", "textfield");
                inputtext.setAttribute("value", "");
                fieldset.appendChild(inputtext);

                labeldat = document.createElement("label");
                labeldat.setAttribute("for", "filefield");
                textlabeldat = document.createTextNode("Datei:");
                labeldat.appendChild(textlabeldat);
                fieldset.appendChild(labeldat);

                inputdat = document.createElement("input");
                inputdat.setAttribute("type", "file");
                inputdat.setAttribute("name", "filefield");
                fieldset.appendChild(inputdat);

                labelbew = document.createElement("label");
                labelbew.setAttribute("for", "bewertung");
                textlabelbew = document.createTextNode("Bewertung:");
                labelbew.appendChild(textlabelbew);
                fieldset.appendChild(labelbew);

                inputbew1 = document.createElement("input");
                inputbew1.setAttribute("type", "radio");
                inputbew1.setAttribute("name", "bewertung");
                fieldset.appendChild(inputbew1);

                inputbew2 = document.createElement("input");
                inputbew2.setAttribute("type", "radio");
                inputbew2.setAttribute("name", "bewertung");
                fieldset.appendChild(inputbew2);

                inputbew3 = document.createElement("input");
                inputbew3.setAttribute("type", "radio");
                inputbew3.setAttribute("name", "bewertung");
                fieldset.appendChild(inputbew3);

                inputbew4 = document.createElement("input");
                inputbew4.setAttribute("type", "radio");
                inputbew4.setAttribute("name", "bewertung");
                fieldset.appendChild(inputbew4);

                inputbew5 = document.createElement("input");
                inputbew5.setAttribute("type", "radio");
                inputbew5.setAttribute("name", "bewertung");
                fieldset.appendChild(inputbew5);

                inputbes = document.createElement("input");
                inputbes.setAttribute("type", "submit");
                inputbes.setAttribute("name", "bestätigen");
                inputbes.onclick = Kommentar.kommentarZuStorage(i);
                fieldset.appendChild(inputbes);

                form.appendChild(fieldset);
            }
            document.body.children[3].appendChild(element);

            if (seite != "Startseite") {
                document.body.children[3].appendChild(form);
            }
        }
    }
}

function initialisierung(){
    artikelErsteller(20);
}

window.addEventListener('load', initialisierung, false);
