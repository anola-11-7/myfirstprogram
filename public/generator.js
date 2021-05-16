"use strict";
let generate_pw = document.getElementById("generate_pw");
console.log(generate_pw.value);
let verben = [
    "läuft zu",
    "springt auf",
    "spricht mit",
    "sieht zu",
    "kratzt"
];
let adjektive = [
    "schön",
    "schlau",
    "ungeduldig",
    "schnell",
    "lustig"
];
let namen = [
    "Peggy",
"Sandy",
"Pierre",
"Edmundo",
"Antoinette",
"Gustavo",
"Janie",
"Albert",
"Claudio",
"Maura",
"Leticia",
"Jesus",
"Lorenzo",
"Jonathan",
"Jefferey",
"Grady",
"Bianca",
"Anita",
"Robert",
"Barry",
"Zack",
"Jamison",
"Troy",
"Dennis",
"Esteban",
"Kendra",
"Sherri",
"Lucile",
"Johnnie",
"Tanisha",
"Isabelle",
"Laurie",
"Houston",
"Casey",
"Sung",
"Evangeline",
"Joan",
"Joseph",
"Ismael",
"Granville",
"Kip",
"Rhea",
"Terrence",
"Lorna",
"Jeannine",
"Kermit",
"Audrey",
"Lonnie",
"Katina",
"Nora"
];
console.log(pick(namen) + ' ' + pick(verben) + ' ' + pick(namen) + '.');
function pick(liste) {
    let index = Math.round(Math.random() * (liste.length - 1));
    let ergebnis = liste[index];
    return ergebnis;
}
;
generate_pw.value = pick(namen) + ' ' + pick(verben) + ' ' + pick(namen) + '.';
