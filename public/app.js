console.log('Hello World');
let p = document.getElementById("paragraph");
p.innerText = "Hello world";
// <- erstellt Funktion
// <- Name der Funktion 
// <- ergebnis type 
function age(number1, number2) {
    //      function scope
    let result = number1 * number2;
    return result;
}
let x = age(2, 33);
console.log(x);
function asterixs(anzahl) {
    let i = 0;
    while (i < anzahl) {
        console.log('*');
        console.log('#');
        i = i + 1;
    }
}
function is_prime(n) {
    let i = 2;
    while (i < n) {
        let rest = n % i;
        if (rest == 0) {
            return false;
        }
        i = i + 1;
    }
    return true;
}
function print_all_primes(g1, g2) {
    let i = g1;
    while (i < g2) {
        if (is_prime(i)) {
            console.log(i);
        }
        i = i + 1;
    }
}
print_all_primes(0, 10);
export {};
// neuer Kommetar
// Hallo
