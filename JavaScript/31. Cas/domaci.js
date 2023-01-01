// Iz datog niza ispitati koliko elemenata je tipa string,
// koliko tipa number,
// koliko tipa boolean,
// koliko elemenata je zapravo niz.

const niz = [
  "jagoda",
  25,
  true,
  "mandarina",
  [1, 2, 3],
  "ananas",
  49,
  694,
  "tresnja",
];
let brojStringova = 0;
let brojNumbera = 0;
let brojBooleanova = 0;
let brojNizova = 0;
for (i = 0; i < niz.length; i++) {
  if (typeof niz[i] === typeof "string") {
    brojStringova++;
  } else if (typeof niz[i] === typeof 20) {
    brojNumbera++;
  } else if (typeof niz[i] === typeof true) {
    brojBooleanova++;
  } else if (typeof niz[i] === typeof ["array"]) {
    brojNizova++;
  }
}

console.log(
  `U datom nizu se nalazi ${brojStringova} stringova, ${brojNumbera} brojeva, ${brojBooleanova} booleana, ${brojNizova} nizova.`
);
