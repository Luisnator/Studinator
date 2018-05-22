function positionInit(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(positionsausgabe, errorHandler);
        navigator.geolocation.watchPosition(positionInit);
    } else {
        console.log("Ortung nicht unterstützt durch diesen Browser.");
    }
}

function positionsausgabe(position){
    console.log("Position: ")
    for (var item in position.coords) {
        console.log(item + " = " + position.coords[item]);
    }
}
function errorHandler(error){
    console.log("Keine Daten für Standortbestimmung vorhanden.");
}

positionInit();