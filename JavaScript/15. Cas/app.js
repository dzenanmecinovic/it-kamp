// Truthy and falsy values
const isSunny = false;
// Kraca sintaksa!
if (isSunny) {
    console.log("Napolju je suncano.")
} else {
    console.log("Napolju je kisa.")
}

// Postoji samo 8 FALSY vrednosti i one su:
// 1.   false
// 2.   ""
// 3.   0
// 4.   -0
// 5.   0n
// 6.   undefined
// 7.   null
// 8.   NaN

// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost TRUTHY ili FALSY vrednost.

function myFunction() {
    const unos = prompt("Unesite neku vrednost")
    if(unos) {
        return "Uneta vrednost je TRUTHY"
    } else {
        return "Uneta vrednost je FALSY"
    }
}

console.log(myFunction())