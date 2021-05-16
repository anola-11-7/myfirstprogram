let generate_pw = document.getElementById("generate_pw") as HTMLInputElement;
console.log(generate_pw.value);

let verben: string[] = [
    "läuft zu",
    "springt auf",
    "spricht mit",
    "sieht zu",
    "kratzt"
];

let adjektive: string[] = [
    "schön",
    "schlau",
    "ungeduldig",
    "schnell",
    "lustig"
]

let namen: string[] = [
    "Alina",
    "Alina",
    "Anna",
    "Anna-Sophia",
    "Anne",
    "Anton",
    "Arne",
    "Bahar",
    "Carolie",
    "Charles",
    "Christopher",
    "Céline",
    "Darina",
    "Diego",
    "Ekrem",
    "Elias",
    "Emilia",
    "Erik",
    "Esther",
    "Felix",
    "Felix",
    "Finley",
    "Franca",
    "Fred",
    "Friederike",
    "Hoang",
    "Janine",
    "Joel",
    "Johanna",
    "Johannes",
    "Josephine",
    "Josey",
    "Julia",
    "Julia",
    "Katharina",
    "Katharina",
    "Kiriakos",
    "Klaus",
    "Kyra",
    "Laetitia",
    "Lara",
    "Leia",
    "Len",
    "Lendrit",
    "Lennart",
    "Leon",
    "Ludwig",
    "Malte",
    "Manuel",
    "Maria",
    "Marius",
    "Marvin",
    "Maurice",
    "Max",
    "Melanie",
    "Merle",
    "Mette",
    "Michael",
    "Michelle",
    "Nadja",
    "Natalie",
    "Nicolas",
    "Nicolas",
    "Nour",
    "Pascal",
    "Pascalia",
    "Patricia",
    "Paul",
    "Paula",
    "Paulina",
    "Pauline",
    "Philip",
    "Rüveyda",
    "Selina",
    "Shehed",
    "Simon",
    "Sina",
    "Solveig",
    "Sophia",
    "Sophia",
    "Svea",
    "Süeda",
    "Sümeyye",
    "Tacim",
    "Thomas",
    "Thore",
    "Tim",
    "Tobias",
    "Torben",
    "Vanessa",
    "Viktoria",
    "Vincent",
    "Vivien",
    "Yasin",
    "Yllka",
    "Zeliha"

];


console.log(pick(namen) +' '+ pick(verben)+ ' ' + pick(namen) + '.');

function pick(liste: string[]): string {

    let index = Math.round(Math.random() * (liste.length - 1));
    let ergebnis = liste[index];
    return ergebnis;

};


 generate_pw.value = pick(namen) +' '+ pick(verben)+ ' ' + pick(namen) + '.';


