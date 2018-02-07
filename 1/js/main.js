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

    content += '</ul>
    productsDiv.innerHTML = content;

};


//AJAX kérés indítása

var xhr = new XMLHttpRequest();

xhr.open("get", "http://localhost:3333");

xhr.onload = function () {
    //sendToLog(this.response);
    showProducts(this.response);

};

xhr.send();