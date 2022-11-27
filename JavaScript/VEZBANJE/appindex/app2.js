// funkcija prompt za povrsinu pravougaonika
function povrsinaPravougaonika() {
        let a = +prompt("Unesite stranicu \"a\" pravougaonika ")
        let b = +prompt("Unesite stranicu \"b\" pravougaonika ")
        if(isNaN(a) || isNaN(b)) {
                console.log("Vrednosti moraju biti brojevi.")
        } else if(a < 0 || b < 0) {
                console.log("Vrednosti moraju biti pozitivni brojevi.")
        }
        return "Povrsina pravougaonika je: " + a * b + " " + "kvadratnih metara.";
}
console.log(povrsinaPravougaonika())
// povrsinaPravougaonika()


const objekat = {
        ime:"Ime",
        prezime:"Prezime"
        }
// console.log(objekat)

// Funkcija za izracunavanje povrsine pravougaonika
function pPravougaonika(a, b) { 
    return a * b;
 }

// funkcija za pretvaranje metara i decimetara u centimetre
function cm(metri, decimetri, centimetri) {
    return 100*metri + 10* decimetri + centimetri
}
// console.log(cm(5, 2, 1));
// funkcija za pretvaranje decimetara i centimetara u metre
function m(metri, decimetri, centimetri) {
    return metri + decimetri / 10 + centimetri / 100
}
// console.log(m(3, 18, 57))

// izracunavanje povrsine pravougaonika cije su stranice :
// a = 0m 2dm 10cm
// b = 1m 0dm 35cm
var a = cm(0, 2, 10)
var b = cm(1, 0, 35)
// console.log(a, b) // 30, 135
// console.log(povrsinaPravougaonika(a, b)) // 4050
console.log("Povrsina datog pravougaonika je " + pPravougaonika(a, b) + " kvadratnih centimetara.") // ispis povrsine u centimetrima

var a = m(0, 2, 10)
var b = m(1, 0, 35)
// console.log(a, b) // 0.3 , 1.35
console.log("Povrsina datog pravougaonika je " + pPravougaonika(a, b) + " kvadratnih metara.") // ispis povrsine u metrima