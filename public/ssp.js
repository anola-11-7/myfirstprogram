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
    let result = pick(symbole);
    generate_symb.innerText = result;
}
;
generate_symb.addEventListener("click", callbackausführen);
export {};
