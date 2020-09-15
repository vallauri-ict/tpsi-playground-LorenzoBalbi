"use strict"
//variabili globali
var parole = { "SUSHI", "CAMPANA", "STALIN", "SCARPONE", "MAGO", "CANE", "CORONA"};
var parola = new String();

function load() {
    generaParola();
    document.getElementById("txtPunti").value = 100;
}

function generaParola() {
    let x = generaNumero(0, parole.lenght);
    parola = parole[x];
}

function generaNumero(a, b) {
    return Math.floor((b - a + 1) * Math.random()) + a;
}