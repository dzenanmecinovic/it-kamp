// replace() metoda vrsi zamenu nekoliko karaktera datog stringa.
// Ima 2 argumenta.
// Po defaultu replace() metoda menja samo prvo pronalazenje datog stringa.

const recenica = "Danas smo podelili sertifikate za HTML, CSS i JavaScript."

let recenica2 = recenica.replace("Danas", "Juce");
console.log(recenica2);
recenica2 = recenica.replace("s", "t");
console.log(recenica2);

// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)
recenica2 = recenica.replace(/s/g, "t")
console.log(recenica2)

// 2. i (insensitive)
recenica2 = recenica.replace(/s/i, "A")
console.log(recenica2)
recenica2 = recenica.replace(/s/ig, "A")
console.log(recenica2)

// toUpperCase() metoda za pretvaranje celog stringa u velika slova.
console.log(recenica.toUpperCase())

// toLowerCase() metoda za pretvaranje celog stringa u velika slova.
console.log(recenica.toLowerCase())
console.log(recenica)
// console.log(recenica2.toUpperCase())

// concat() metoda vrsi spajanje dva ili vise stringova.

let a = "Danas je 16. cas JavaScripta."
let b = "Bice JavaScripta i preko 50 casova."
// Varijanta bez concat()
let c = a + " " + b
console.log(c);

c = a.concat(" ",b, "\nNakon toga cemo raditi React biblioteku." );
console.log(c)

// Napomena.
// Sve string metode prave onvu promenljivu (jer su stringovi immutable vrednosti).

// Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// Ako dati string ima vecu duzinu od 9:
// Pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. Nakon toga, novom stringu menjamo sva mala slova "a" sa "B", i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka.
// Ako string ima duzinu <= 9:
// Funkcija treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivanje".

function zadatak() {
    if(recenica[i] > 9) {
        recenica2 = recenica.substr(, 10)
        recenica2.replace("a", "B")
    }
    return "Ovo je novodobijena recenica:".concat(recenica2)
    else {
        return
    }
}

// Domaci zadatak:
// 