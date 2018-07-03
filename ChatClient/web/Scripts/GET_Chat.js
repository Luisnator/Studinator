var statusgetChat = function () {
    if (this.readyState == 4 && this.status == 200) {
        //console.log(this.response);
        //console.log(this.getAllResponseHeaders());
        if (this.response != "-1") {
            var chat = document.body.children[0].value;
            //list = JSON.parse(this.response).messages;
            list = this.response.messages;
            for (var i = 0; i < list.length; i++) {
                chat += list[i].username + ": " + list[i].message + "\n"
            }
            document.body.children[0].value = chat;
        }
        getloop();
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function getChat(username, newUser) {
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:8080/ChatApplication/ChatServlet?username=" + username + "&newUser=" + newUser);
    requestor.responseType = "json";
    requestor.onreadystatechange = statusgetChat;
    requestor.send();
}

//window.addEventListener('load', getChat, false);