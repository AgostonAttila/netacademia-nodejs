//Szükséges modulok beolvasása
var itfactory = require('itfactory'),
    http = require('http'),
    fs = require('fs'),
    port = 3333;

itfactory.showConsoleMessage('Hello IT Factory');

//Termékek lekérése a fájlrendszerből
//var products = itfactory.readAsJSON('json/products.json');
//console.log(products);



var filteredProducts = itfactory.findInJSON('json/products.json', 'name', 'borotva');
//console.log(filteredProducts);

//Get kérések kiszolgálása
function handleGetRequest(request, response) {

    var url = '.' + request.url;
    //Hiba kezelése
    try {
        var file = fs.readFileSync(url, "utf8");
        response.end(file);
    } catch (e) {
        //
    }



}


//Szerver indítása
var app = http.createServer(function (request, response) {
    response.setHeader('Acces-Control-Allow-Origin', '*');

    //Kérések kezelése

    switch (request.method.toLowerCase()) {
    case "get":
        handleGetRequest(request, response);
        break;
    }

    console.log("Kérés: ", request.method);

    console.log(request.url);

    response.end("Hello...");

}).listen(port);