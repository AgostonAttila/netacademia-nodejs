// Process objektum

/*var args = [];
process.argv.forEach(function (val, index, array) {
    args.push(val);

}); */

/*if (args.indexOf("dev") !== -1) {
    console.log("development mode");

} else {
    console.log("production mode");
    console.log = function () {};
}

console.log("Program started...");*/


//Futtató környezet vizsgálata

if (process.env.OS.indexOf("Windows") !== -1) {
    console.log("Windowson futok");
}


var util = require('util');


//Nemjó mindig példányosítja
/*setInterval(function () {
    console.log(util.inspect(process.memoryUsage()));
}, 1000);*/

//Memória használat csak egyszer hívja meg
/*
var _to;

function startMemoryMonitor() {
    clearTimeout(_to);
    console.log(util.inspect(process.memoryUsage()));
    _to = setTimeout(function () {
        startMemoryMonitor();
    }, 1000);
}



_to = setTimeout(function () {
    startMemoryMonitor();
}, 1000);

*/


///////////////////////////////////ESEMÉNYEK///////////////////////////////////////////////
var eventModule = require('./eventModule.js');


//Régi feliratkozás
/*
eventModule
    .readJSON
    .start("json/products.json")
    .on("done", function (data) {
        console.log(data);
    });
*/


//Új callback függvénnyel
eventModule
    .readJSON.start("json/products.json", function (data) {
        console.log(data);
    });