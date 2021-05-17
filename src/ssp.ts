 export{}; 
 let generate_symb = document.getElementById("generator") as HTMLButtonElement; 

 let symbole: string[] = [
    "✂️",
    "🌑",
    "📰"
];

function pick(liste: string[]): string {

    let index = Math.round(Math.random() * (liste.length - 1));
    let ergebnis = liste[index];
    return ergebnis;
};

function callbackausführen():void {
    let result = pick(symbole); 
    generate_symb.innerText = result;
}; 
 
generate_symb.addEventListener("click", callbackausführen); 
