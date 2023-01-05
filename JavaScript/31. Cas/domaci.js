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

function types(niz) {
  let stringTipa = 0;
  let numberTipa = 0;
  let booleanTipa = 0;
  let nizTipa = 0;
  for (let item of niz) {
    if (typeof item === "string") {
      stringTipa++;
    } else if (typeof item === "number") {
      numberTipa++;
    } else if (typeof item === "boolean") {
      booleanTipa++;
    } else if (item instanceof Array) {
      nizTipa++;
    }
  }
  return `U datom nizu su se nasla: \n ${stringTipa} stringa, \n ${numberTipa} broja, \n ${booleanTipa} boolean, \n ${nizTipa} niz.`;
}
console.log(types(niz));

// for (let i of nizz) {
//   console.log(i);
// }

// Novi zapis for petlje, koji se odnosi na sve iterirajuce objekte.
