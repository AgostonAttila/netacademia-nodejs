//Szerver válaszok logolása
function sendToLog(log) {
    var timeStamp = new Date().getTime();
    document.querySelector("#node-console").innerHTML += "\n" + timeStamp + ": " + log;
};

//Termékek megjelenítése
var productsDiv = document.querySelector(".products-div");

function showProducts(log) {
    var content = '<ul>';
    products = JSON.parse(products);
    for (var k in products) {
        content += '<li><b>' + products[k].name + '</b></li>';
    }

    content += '</ul>';
    productsDiv.innerHTML = content;

};


//Üzenetek megjelenítése
var area = document.querySelector("#node-console");

function showSocketMessage(message) {
    area.innerHTML += message + "\n";
}

var socket = io('http://localhost:3333');

//Üzenetek küldése
var messageInput = document.querySelector("#my-message");
messageInput.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        socket.emit('send-message', messageInput.value);
        messageInput.value = "";
    }
});

document.querySelector("#send-message")
    .addEventListener("click", function () {
        socket.emit('send-message', messageInput.value);
        messageInput.value = "";
    });

//Socket.IO kliens oldali kommunikáció

socket.on('chat-message', function (data) {
    showSocketMessage(data);
    //socket.emit('my other event', {
    //    my: 'data'
    //});
});