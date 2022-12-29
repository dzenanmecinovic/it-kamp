// 1. Osnovni Tipovi Podataka
// (Primitivni Tipovi Podataka)
// (Vrednosni Tipovi Podataka)

// 2. (Referentni Tipovi Podataka)
// Neprimitivni Tipovi Podataka

let brojGodina = 26;
let brojTvojihGodina = brojGodina;

console.log(brojTvojihGodina);

brojTvojihGodina = 22;
console.log(brojTvojihGodina);

console.log(brojGodina);

///////////////////////////////////////////////////////////////

let godine = [20, 21, 18, 17, 17, 19, 18, 17, 18, 19];
let noveGodine = godine;
console.log(noveGodine);
noveGodine.push(34);
console.log(noveGodine);
console.log(godine);

// godine i noveGodine imaju isti lokacijski prostor u memoriji i menjanjem elemenata prvog niza, menjace se i elementi drugog.

// Write a JavaScript program to display the current day and time in the following format.
// Current time is: 10 PM : 30 : 38

// Write a JavaScript program to find 1st january is being a Sunday between 2014 and 2050.
