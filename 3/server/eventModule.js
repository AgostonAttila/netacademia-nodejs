///////////////////////////////////ESEMÉNYEK///////////////////////////////////////////////
var events = require('events'),
    fs = require('fs');

//Létrehozunk egy új event objektmot
var fileEvent = function (callBack) {};

fileEvent.prototype = new events.EventEmitter;


//Meghívással feliratkozás
/*
fileEvent.prototype.start = function (path) {
    this.path = path;
    var self = this;
    this.fileContent = fs.readFile(path, "utf8", function (err, data) {
        self.emit("done", data);       
    });
    return this;
};
*/


fileEvent.prototype.start = function (path, callBack) {
    this.path = path;
    var self = this;
    fs.readFile(path, "utf8", function (err, data) {
        callBack.call(self, data);
    });
    return this;
};

//Exportáljuk a lokális változókat 
module.exports = {
    "readJSON": new fileEvent
}

/*
var myEvent = function (num) {
    this.count = num;

};


myEvent.prototype = new events.EventEmitter; //Eseménykezelő


myEvent.prototype.increment = function () {
    var self = this;
    setInterval(function () {
        if (self.count % 2 === 0) self.emit('even');
        self.count++;
    }, 300);
}

var newEvent = new myEvent(3);

newEvent.on('even', function () {
    console.log("A szám páros!: " + this.count);
});




module.exports = {
    "start": newEvent.increment
}
*/