document.getElementById('paragraf').innerHTML = 'Ovo je paragraf koji je unet naknadno.';

paragraf = document.getElementById('paragraf');

paragraf.style.backgroundColor = 'red';

console.log('Ovo je nas prvi ispis u konzoli');

// TIPOVI PODATAKA U JAVASCRIPTU

// Za proveru tipa neke promenljive (varijable) se koristi typeof operator.

// PRIMITIVNI TIPOVI PODATAKA

// 1. Stringovi - predstavljaju niz karaktera koji je zapisan unutar navodnika
// (obicnih ili duplih).

console.log('Ovo je neki string napisan unutar obicnih navodnika');
console.log(typeof 'Ovo je neki string napisan unutar obicnih navodnika');

console.log( "Ovo je neki string napisan unutar duplih navodnika");
console.log(typeof "Ovo je neki string napisan unutar duplih navodnika");

console.log( `Ovo je neki string napisan unutar duplih navodnika`);

// 2. Number - predstavlja broj, koji moze biti zapisan sa ili bez decimalnog zareza.
// Ne pravi se razlika izmedju celih, realnih i kompleksnih brojeva.

console.log(14);
console.log(typeof 14);

console.log(-5.67);
console.log(typeof -5.67);

// 3. BigInt - koristi se za skladistenje brojeva cija granica prelazi granicu
// number tipa podatka.

console.log(BigInt(95295295925925925925295295295));
console.log(typeof BigInt(95295295925925925925295295295));

// 4. boolean - Logicki entitet koji moze da ima dve vrednosti:
// true,
// false.
// Najcesce se koristi u kondicionalima (if naredbe) i ima veliku primenu.

daLiPadaKisa = false;

console.log(true);
console.log(typeof true);

console.log(daLiPadaKisa);

// 5. undefined - je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu
// ali joj nismo dodelili vrednost.
// U tom slucaju i vrednost i tip promenljive je undefined.

let prom1; // deklarisanje promenljive
prom1 = 54; // inicijalizacija (dodela vredonsti) promenljive

// 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili
// nekorektnu vrednost.

skola = null;
console.log(skola)
console.log(typeof skola); // rezultat je Object

// 7. Symbol - Novi tip podatka u JavaScriptu koji se koristi za dodeljivanje jedinstvene ili anonimne vrednosti.

x = Symbol("Danas je lepo vreme");
console.log(x);

y =  Symbol("Danas je lepo vreme");
console.log(y);

console.log(x === y); // Razlikuju se

// Primitivini tipovi podataka se koriste kada imamo promenljivu (varijablu) sa samo jednom vrednoscu.

// NEPRIMITIVNI TIPOVI PODATAKA //

// Za promenljive (varijable) koje mogu skladistiti vise vrednosti, ili neke kompleksne vrednosti
// se koriste neprimitivni tipovi podataka.

// Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u JavaScriptu
// dobijamo Object za tip

// 1. Nizovi (arrays) - neprimitivni tip podatka koji nam sluzi za skladistenje vise vrednosti.
// U JavaScriptu niz moze sadrzati elemente razlicitog tipa

niz1 = ["Mitar", "Dzenan", "Haris", "Hamed", "Nikola"]
console.log(niz1);

niz2 = ["Hamed", 15, false]
console.log(niz2)

// Jos jedan nacin definisnja niza:
niz3 = new Array("Mitar", "Dzenan", "Haris", "Hamed", "Nikola")
console.log(niz3)

// 2. Objekti (Objects) - su GLAVNI neprimitivni tip podatka u JavaScriptu.
// Objekti se zapisuju po principu name:value pair (ime:vrednost par)

obj1 = {
    ime:" Mehmed ",
    prezime:" Kucevic ",
    godine: 15,
    skola: "Dva heroja",
    punoletnost: false
}

console.log(obj1.ime, obj1.godine)

obj2 = new Object({
    ime:" Amer ",
    prezime:" Honic ",
    godine: 19,
    skola: " DUNP ",
    punoletnost: true
})

console.log(obj2)

// 3. Setovi (sets) - Oni su slicni nizovima sa razlikom da set ne moze da sadrzi duplikate.

set1 = new Set(["Alen", "Hasan", "Miona", "Amir", "Alen"]) // Nisu dozvoljeni duplikati
console.log(set1)

// 4. Mape (maps) - su slicni objektima sa nesto drugacijim nacinom definisanja.

map1 = new Map([
    ["jabuke", 50],
    ["kruske", 60],
    ["jagode", 80],
])

console.log(map1)