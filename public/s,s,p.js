"use strict";
let generate_symb = document.getElementById("generator");
let symbole = [
    "✂️",
    "🌑",
    "📰"
];
function pick(liste) {
    let index = Math.round(Math.random() * (liste.length - 1));
    let ergebnis = liste[index];
    return ergebnis;
}
;
function callbackausführen() {
    console.log('Hallo world');
}
;
generate_symb.addEventListener("onclick", callbackausführen);
