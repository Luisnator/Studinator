var statuspostChat = function () {
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
    } else {
        console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function postChat(username, content) {
    let requestor = new XMLHttpRequest();
    requestor.open("POST", "http://localhost:8080/ChatApplication/ChatServlet");
    requestor.responseType = "json";
    requestor.onreadystatechange = statuspostChat;

    let obj = new Object();
    obj["username"] = username;
    obj["message"] = content;

    requestor.send(JSON.stringify(obj));
}

//window.addEventListener('load', postChat, false);