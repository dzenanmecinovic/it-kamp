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
  if (niz[i] === niz[i] instanceof Array) {
    brojNizova++;
  }
  if (niz[i] === typeof Number) {
    brojNumbera++;
  }
  if (niz[i] === typeof String) {
    brojStringova++;
  }
  if (niz[i] === typeof Boolean) {
    brojBooleanova++;
  } else {
    break;
  }
}

console.log(
  `U nizu "niz" se nalazi ${brojStringova} stringova, ${brojNumbera} brojeva, ${brojBooleanova} booleana, ${brojNizova} nizova.`
);
