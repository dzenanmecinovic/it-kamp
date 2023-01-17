// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Novodobijeni niz moze imati maksimalno elemenata kao niz na koji se primenjuje metoda, takodje moze biti prazan niz.

const godine = [19, 17, 20, 17, 16, 15, 19, 20];
const punoletni = godine.filter(function (element) {
  return element > 17;
});

console.log(punoletni);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza, gde je drugo slovo "e".
const niz = [
  "Bakir",
  "Haris",
  "Amer",
  "Dzenan",
  "Hasan",
  "Aladin",
  "Nikola",
  "Merisa",
  "Emin",
  "Alen",
  "Miona",
  "Mitar",
];

const noviNiz = niz.filter(function (element) {
  return element[1] == "e";
});

console.log(noviNiz);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 4.

const sestKaraktera = niz.filter(function (element) {
  return element.length <= 4;
});

console.log(sestKaraktera);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima ciji je tip "boolean".
const newArr = ["Rec", "Dve RECi", 26, true, false, [true, false], 49, true];

const boolean = newArr.filter(function (element) {
  return typeof element == typeof true;
});
console.log(boolean);

// Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi niz uz ispunjenje uslova:
// value > 2 => value * 7
// value > 2 and value < 8 => (value*4)/2
// Ostale vrednosti da ne uzima u obzir
// I na kraju treba novi niz vratiti sa godinama < 10.

function zadatak(niz) {
  const filter = niz.filter(function (element) {
    return element > 2;
  });
  const mapa = filter.map((elementNiza) => {
    return elementNiza * 7;
  });
  if (niz < 8) {
    niz[i] * 2;
  }
}

function root(niz) {
  const newArr = niz.filter((el) => el > 2);
  const newArr2 = newArr.map((el) => {
    if (el < 8) {
      return el * 2;
    } else {
      return el * 7;
    }
  });
  const newArr3 = newArr2.filter((el) => el < 10);
  return newArr3;
}
console.log(root([-1, 2, 3, 4, 6, 9, 12, 14]));

// reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz.
// Sabrati sve elemente niza:
// const godine = [19, 17, 20, 17, 16, 15, 19, 20];
const zbirGodina = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);

console.log(zbirGodina);

// Dodati pocetnu vrednost 350:
const iznos = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  350
);

console.log(iznos);

// Prosecna starost godina
const suma = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
const brojElemenata = godine.length;
const konacni = suma / brojElemenata;
// const ispis = konacni.toFixed(0);
console.log(konacni);

// miles to km and addition each km
const array = [55, 78, 140, 121, 96, 100, 67];

function milje(broj) {
  const kilometri = broj
    .map((element) => element * 1.61)
    .reduce((prvi, drugi) => prvi + drugi);
  return kilometri;
}

console.log(milje(array));

// zbir pojedinacnih elemenata dva niza

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const sabiranje = (prvi, drugi) => {
  const length = prvi.length > drugi.length ? prvi.length : drugi.length;
  const newArr = [];
  for (let i = 0; i < length; i++) {
    if (prvi[i] === undefined) {
      newArr.push(drugi[i]);
    } else if (drugi[i] === undefined) {
      newArr.push(prvi[i]);
    } else {
      newArr.push(prvi[i] + drugi[i]);
    }
  }
  return newArr;
};
console.log(sabiranje(array1, array2));

// Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

// From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
