// Niz predstavlja strukturu podataka koja moze sadrzati vise od jedne vrednosti.

// Nizovi u JavaScriptu su heterogeni (mogu sadrzati elemente razlicitih tipova podataka).

const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);

// Dozvoljeno je, cesto i prakticnije pisati svaki element niza u novom redu.

// const niz = [
//     "Mitar",
//     "Vranic",
//     20,
//     true
// ]

// Mozemo prvo kreirati prazan niz, pa nakon toga dodavati rucno elemente.

const automobili = [];
automobili[0] = "Audi";
console.log(automobili);
automobili[1] = "Passat";

automobili[5] = "Golf";
console.log(automobili[3]);

// Istu sintaksu mozmeo iskoristiti za promenu vrednosti elementa.
automobili[0] = "Mercedes";
console.log(automobili);

// Niz mozemo definisati preko new keyword:

const niz2 = new Array("Hasan", "Omar", "Emin");
console.log(niz2);

// Radi jednostavnosti, citljivosti koda i brzine izvrsavanja je bolje koristiti [] nego new.

const niz3 = [40];
console.log(niz3);
// new Array ce napraviti niz od 40 praznih mesta.
const niz4 = new Array(40);
console.log(niz4);

// Pristupanje se vrsi preko indeksa.
console.log(automobili[1]);

// Postoje 2 nacina za ispitivanje da li je neka promenljiva niz:
console.log(typeof automobili);

// 1. Array.isArray(potencijalnoNiz)
console.log(Array.isArray(automobili));
console.log(Array.isArray("neki string"));

// 2. instanceof Array(potencijalnoNiz)
console.log(automobili instanceof Array);
console.log(25 instanceof Array);

// Elementi niza mogu biti bilo koje vrednosti:
// Date, Array, Boolean, Function, Number,....

// Za proveru duzine niza koristimo length:
console.log(automobili.length);

// Za dodavanje elementa na kraju niza se koristi push() metoda.

const dani = ["ponedeljak", "utorak"];
dani.push("sreda");
console.log(dani);
// push() metoda nam omogucava dodavanje vise od jednog elementa
// dani.push(...) vraca novu duzinu niza
console.log(dani.push("cetvrtak", "petak"));
console.log(dani);

// Kako da dodamo element na poslednjem mestu u nizu ako ne znamo duzinu niza i ako ne koristimo push() metodu?

dani[dani.length] = "subota";
console.log(dani);

// Nizovi su zapravo vrsta objekata koji imaju brojevne indekse.

// Za pretvaranje niza u string mozemo iskoristiti dve metode.
// 1. toString()
// 2. join()

// 1.
const daniStr = dani.toString();
console.log(daniStr);
console.log(typeof daniStr);
// Obrnuti postupak
const noviNiz = daniStr.split(",");
console.log(noviNiz);

// 2.
// Klasicni primer:
const daniStr2 = dani.join();
console.log(daniStr2);
console.log(typeof daniStr2);
// Dobijanje stringa i stavljanje nekog znaka izmedju elemenata niza koji smo pretvorili u string
const daniStr3 = dani.join("*");
console.log(daniStr3);

// pop() metoda brise poslednji element iz niza.

// dani.pop() vraca vrednost izbrisanog elementa.
const subota = dani.pop();
console.log(dani);
console.log(subota);

// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz.
