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

result = wordAnalysis()
console.log(wordAnalysis());

// aggiungiamo messaggio stampa 
if (result) {
    console.log("La parola è un palindromo");
} else {
    console.log("La parola non è un palindromo");
}


  
