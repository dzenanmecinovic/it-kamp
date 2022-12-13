// JavaScript prepoznaje samo jedan tip podatka za brojeve.
// U pitanju je number tip podatka i oni mogu biti zapisani sa ili bez decimalnog zareza.

// Veliki brojevi mogu biti zapisani sa tzv. exponent oznakom:

const petica = 5e6
console.log(petica);

const noviBroj = 555e-6;
console.log(noviBroj);

// Sto se tice sabiranja decimalnih brojeva JavaScript nije bas najbolji kalkulator.
const x = 0.1;
const y = 0.2;
const z = x + y;
console.log(z);

// + operator
console.log("10" + 10) // "1010"

console.log("10" - 2); // 8

// NaN - Not a Number
// NaN je JavaScript rezervisana rec koja ukazuje da broj nije korektan.
// NaN je tipa number

// Za proveru da li je neka vrednost korektan broj se koristi !isNaN();

console.log(isNaN(100/"Apple"));

// Infinity (ili -Infinity) je vrednost koju cemo da dobijemo kada rezultat premasi najveci broj u JavaScriptu. (bude veoma mali broj)
const deljenje = 10 / 0;
console.log(-1 / 0);
console.log(deljenje);

// rgb(0, 255, 123)
// #12ab33
// rgb(18, 171, 51)

// 12 = 1*16 + 2*1 = 18
// ab = 10*16 + 11*1 = 171
// 33 = 3*16 + 3*1 = 48 + 3 = 51

// Hexadecimalni brojevi:
// Ako su brojevi napisani prefiksom 0xFF rezultat ce biti 255

const r = 0xFF;
console.log(r);

// Pored osnovnog nacina dodeljivanja vrednosti nekoj promenljivoj mozemo to uraditi i preko new keyworda:
// Nije dobra praksa.
const k = 22;
const l = new Number(33);
const j = new String("test");

console.log(k);
console.log(l);
console.log(k + l);
console.log(typeof k);
console.log(typeof l);
console.log(j);

// funkcija za pretvaranje kilometara u metre
function m(kilometri) {
    return 1000 * kilometri
}

// funkcija za pretvaranje inca u centimetre
function cm(inch) {
    return 2.54*inch
}

console.log(m(5))
console.log(cm(10))