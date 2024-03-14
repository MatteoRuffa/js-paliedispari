/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const word = prompt('inserisci una parola')
console.log(word);

// prova di spilt!
// let parola = "prova";
// let lettere = parola.split('');
// console.log(lettere);

let result = false;

/* creo una funzione che riconosce le lettere in una parola e 
analizza se sono posizionate nel modo giusto per formare una parola palindroma */
function wordAnalysis() {
    let letter = word.split('');
    console.log(letter);     //chiedere ai prof perche viene stampato due volte(forse perche esegue la funz. due volte?)
    // fare un ciclo per analizzare le lettere e vedere se sono uguali alla rispettiva posizione
    let n = 0; 
    while (n < letter.length / 2) {
        if (letter[n] !== letter[letter.length - (n + 1)]) {
            return result = false;
        }
        n++;
    }
    return result = true;
}
console.log(wordAnalysis());

// aggiungiamo messaggio stampa 
if (result) {
    console.log("La parola è un palindromo");
} else {
    console.log("La parola non è un palindromo");
}



/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let userChoise;

while (userChoise !== 'pari' && userChoise !== 'dispari') {
    userChoise = prompt('Inserisci "pari" o "dispari"').toLowerCase();
}
console.log(`Hai scelto: ${userChoise}`);

let userNumber = parseInt(prompt('scegli un numero tra 1 e 5!'))
console.log(`Hai scelto: ${userNumber}`);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const compNumber = getRndInteger(1, 5);
console.log(`il computer sceglie: ${compNumber}`);

// Sommiamo i due numeri
let sum = userNumber + compNumber;
console.log(`la somma dei due numeri è: ${sum} `);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione[GENERICA])
function paliDispari(n) {     // creo una funz.generica che se inserisco un numero mi dice se e pari o dispari
    if (n % 2 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(paliDispari(sum));

// verifichiamo se il risultato e pari o dispari e diciamo se hai vinto o perso dipendendo dai casi scelti in precedenza
if (userChoise === 'pari' && paliDispari(sum)) {
    console.log(`HAI VINTO!`);
} else if (userChoise === 'dispari' && !paliDispari(sum) ) {
    console.log(`HAI VINTO!`);
} else {
    console.log(`HAI PERSO!`);
}