//HTTP modul beolvasása


var http = require('http'),
    fs = require('fs'),
    port = 3333;


//Szerver indítása
http.createServer(function (request, response) {

    response.setHeader('Acces-Control-Allow-Origin', '*');

    //Termékek lekérése a fájlrendszerből
    var products = fs.readFileSync('/json/products.json', 'utf8');

    response.end(products);

}).listen("3333");

console.log("Server listening on " + port);