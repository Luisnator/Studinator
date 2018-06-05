function suche() {
    temp = location.search.split("=")[1];
    if (temp != undefined) {
        para = temp.replace(new RegExp('%20', 'g'), ' ');
        liste = document.getElementsByClassName(document.head.getAttribute("id"));
        for (var i = 0; i < liste.length; i++) {
            if (para == liste[i].children[0].innerHTML.split("</h2>")[1]) {
                liste[i].scrollIntoView();
            }
        }
    }
}

window.addEventListener('load', suche, false);