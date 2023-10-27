// Nastavak math metoda //
// Math.min() nam vraca najmanji broj od poslatih. Argumenata moze imati neograniceno.

console.log(Math.min(45, 54, 66, -66, 99, 35, -19));

// Math.max() nam vraca najveci broj od poslatih. Argumenata moze imati neograniceno.

console.log(Math.max(45, 54, 66, -66, 99, 35, -19));

// Primena kod nizova:
const najmanji = Math.min.apply(null, [19, 55, 33]);
console.log(najmanji);

// Math.random() nam vraca broj izmedju 0(ukljucujuci) i 1(nije ukljucena).
console.log(Math.random());

// Broj izmedju 0 i 1:

const broj = Math.round(Math.random());
console.log(broj);

// Broj izmedju 0 i 5(ukljucujuci 5):

const broj2 = Math.round(Math.random() * 5);
console.log(broj2);

// Broj izmedju 50 i 100(ukljucujuci 100):
// Mnozimo sa brojem koliki ce opseg zapravo biti, a dodajemo broj koji predstavlja pocetnu vrednost iz opsega.
const broj3 = Math.round(Math.random() * 50 + 50);
console.log(broj3);

const test = Math.round(Math.random() * 20) + 50;
console.log(test);

// Math.log(x)    - vraca vrednost logaritma broja x za osonvu e
// Math.log2(x)   - vraca vrednost logaritma broja x za osonvu 2
// Math.log10(x)  - vraca vrednost logaritma broja x za osonvu 10

console.log(Math.log(0.36));
console.log(Math.log2(1.5));
console.log(Math.log10(15));

// Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate koordinate krajnjih tacaka.

function rastojanjeTacaka(xa, ya, xb, yb) {
  return `Rastojanje je priblizno broju ${Math.sqrt(
    (xb - xa) ** 2 + (yb - ya) ** 2
  ).toFixed()}.`;
}

console.log(rastojanjeTacaka(23, 42, 52, 92));
console.log(rastojanjeTacaka(1, 1, 4, 5)); // root

function greet(who) {
  !who ? null : console.log(`Pozdrav, ${who}!`);
}

greet("Dzenan");
greet();

// Takmicari su radili testove iz matematike i programiranja. Za svaki predmet dobili su odredjeni broj poena(ceo broj od 0 do 50). Takmicari se rangiraju po ukupnom broju poena iz oba predmeta. Ako dva takmicara imaju isti broj poena, pobednik je onaj koji ima vise poena iz programiranja. Potrebno je napisati program koji odredjuje je pobednika takmicenja.

// Ulaz: Ucitavaju se podaci za dva takmicara. Za svakog takmicara se ucitava broj poena iz matematike, a zatim broj poena iz programiranja.

// Izlaz: Potrebno je ispisati redni broj pobednika (1 ili 2). Ako su dva takmicara ostvarila potpuno isti uspeh, pobedink je takmicar 1 (jer je ostvario vise poena na kvalifikacionom takmicenju).

function Takmicari(
  prviMatematika,
  prviProgramiranje,
  drugiMatematika,
  drugiProgramiranje
) {
  if (
    isNaN(prviMatematika) ||
    isNaN(prviProgramiranje) ||
    isNaN(drugiMatematika) ||
    isNaN(drugiProgramiranje)
  ) {
    return `Niste uneli korektan broj.`;
  } else if (
    prviMatematika !== Math.trunc(prviMatematika) ||
    prviProgramiranje !== Math.trunc(prviProgramiranje) ||
    drugiMatematika !== Math.trunc(drugiMatematika) ||
    drugiProgramiranje !== Math.trunc(drugiProgramiranje)
  ) {
    return `Broj bodova mora biti ceo broj.`;
  } else if (
    prviMatematika < 0 ||
    prviMatematika > 50 ||
    drugiMatematika < 0 ||
    drugiMatematika > 50 ||
    prviProgramiranje < 0 ||
    prviProgramiranje > 50 ||
    drugiProgramiranje < 0 ||
    drugiProgramiranje > 50
  ) {
    return `Ukupan broj bodova mora biti izmedju 0 i 50.`;
  } else if (
    prviMatematika > drugiMatematika &&
    prviProgramiranje > drugiProgramiranje
  ) {
    return `Pobednik ovog takmicenja je prvi takmicar.`;
  } else if (
    drugiMatematika > prviMatematika &&
    drugiProgramiranje > prviProgramiranje
  ) {
    return `Pobednik ovog takmicenja je drugi takmicar.`;
  } else if (
    prviMatematika === drugiMatematika &&
    prviProgramiranje > drugiProgramiranje
  ) {
    return `Pobednik je prvi takmicar jer ima vise poena iz programiranja.`;
  } else if (
    prviMatematika === drugiMatematika &&
    drugiProgramiranje > prviProgramiranje
  ) {
    return `Pobednik je drugi takmicar jer ima vise poena iz programiranja.`;
  } else if (
    prviMatematika === drugiMatematika &&
    prviProgramiranje === drugiProgramiranje
  ) {
    return `Pobednik je prvi takmicar jer je ostvario vise poena na kvalifikacionom takmicenju.`;
  }
}

console.log(Takmicari(30, 40, 20, 35));

// root
function bolji(m1, p1, m2, p2) {
  const poeni1 = m1 + p1;
  const poeni2 = m2 + p2;
  if (poeni1 < poeni2) {
    return `Pobednik je drugi takmicar.`;
  } else if (poeni1 > poeni2) {
    return `Pobednik je prvi takmicar.`;
  } else {
    if (p2 > p1) {
      return `Pobednik je drugi takmicar.`;
    } else {
      return `Pobednik je prvi takmicar.`;
    }
  }
}

console.log(bolji(40, 30, 40, 30));
console.log(bolji(35, 30, 40, 25));
console.log(bolji(35, 30, 40, 30));
// console.log(bolji(35, 30, 40, 25));
/////////////////////////////////////////////
// root
// function NZD(a, b) {
//   // const manji = a < b ? a : b
//   let manji = Math.min(a, b);
//   let zeljeniBroj;
//   while (manji >= 1) {
//     if (a % manji === 0 && b % manji === 0) {
//       zeljeniBroj = manji;
//       break;
//     }
//     manji--;
//   }
//   return zeljeniBroj;
// }

// console.log(NZD(10, 15));
// console.log(NZD(5, 10));
// console.log(NZD(4, 9));

// Domaci NZS.
// NZS
// 2, 4 -- 4

// 4, 5 -- 20

function NZS(a, b) {
  let veci = Math.max(a, b);
  let nzs;
  while (1 <= veci) {
    if (veci % a === 0 && veci % b === 0) {
      nzs = veci;
      break;
    }
    veci++;
  }
  return nzs;
}
// console.log(NZS(2, 4));
// console.log(NZS(4, 5));
