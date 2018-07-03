document.body.children[1].onkeypress = function (e) {
    e = e || window.event;
    setTimeout(function () {
        inputText = document.body.children[1].value;
        inputChar = inputText.substr(inputText.length - 1);
        //alert(inputText + ": " + inputChar);
        //console.log(inputText + ": " + inputChar);
        username = document.body.children[2].value;
        if (username.length <= 0) {
            alert("Bitte geben sie einen Nutzernamen ein");
            document.body.children[1].value = "";
            document.body.children[2].value = "";
        } else {
            if (inputChar == "\n") {
                document.body.children[1].value = "";
            }
            postChat(username, inputChar);
        }
    }, (50));

};
var registered = false;

function confirmButton() {
    if (document.body.children[2].value.length > 0 && !registered) {
        document.body.children[1].disabled = false;
        document.body.children[2].disabled = true;
        getChat(document.body.children[2].value, "1");
        registered = true;
    }
}

function getloop() {
    if (registered) {
        setTimeout(function () {
            getChat(document.body.children[2].value, "0");
        }, (1000));
    }
}