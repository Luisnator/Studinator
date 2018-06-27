var statusAenderung1 = function(){
    if (this.readyState == 4 && this.status == 200){
        var arrayBufferView = new Uint8Array( this.response );
        var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( blob );
        
        var img2 = document.querySelector( "#img2" );
        img2.srcset = imageUrl;
        
        //console.log(this.getAllResponseHeaders());
    }else{
        //console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};

var statusAenderung2 = function(){
    if (this.readyState == 4 && this.status == 200){
        var arrayBufferView = new Uint8Array( this.response );
        var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL( blob );
        
        var img = document.querySelector( "#img1" );
        img.srcset = imageUrl;
        
        //console.log(this.getAllResponseHeaders());
    }else{
        //console.log("readyState: " + this.readyState + "; Status: " + this.status);
    }
};
function ladeBild(){
    let requestor = new XMLHttpRequest();
    requestor.open("GET", "http://localhost:38142/studfileserver/SendeMedien?name=StudBoardLogo150x100.png");
    //requestor.open("GET", "http://localhost:8080/studfileserver/SendeMedien?name=StudBoardLogo150x100.png");
    //requestor.open("GET", "http://localhost:8080/studfileserver/img/StudBoardLogo150x100.png");
    requestor.responseType = "arraybuffer";
    requestor.onreadystatechange = statusAenderung1;
    requestor.send();
    
    let requestor2 = new XMLHttpRequest();
    requestor2.open("GET", "http://localhost:38142/studfileserver/SendeMedien?name=StudBoardLogo300x200.png");
    //requestor2.open("GET", "http://localhost:8080/studfileserver/SendeMedien?name=StudBoardLogo300x200.png");
    //requestor2.open("GET", "http://localhost:8080/studfileserver/img/StudBoardLogo300x200.png");
    requestor2.responseType = "arraybuffer";
    requestor2.onreadystatechange = statusAenderung2;
    requestor2.send();
}

window.addEventListener('load', ladeBild, false);