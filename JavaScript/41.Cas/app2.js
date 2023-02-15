// JS objekti su mutable (promenljivi) //

const dzenan = {
  ime: "Dzenan",
  prezime: "Mecinovic",
  godine: 19,
};

const dzenan2 = dzenan;
console.log(dzenan2);
dzenan2.prezime = "Kosuta";
dzenan2.godine = 26;
console.log(dzenan2);
console.log(dzenan);

// Brisanje svojstava iz objekta:

const mitar = {
  ime: "Mitar",
  prezime: "Vranic",
  godine: 20,
  skola: "Prva Tehnicka",
};

// delete mitar.skola; // delete keyword se koristi za brisanje elemenata
// delete obj.property brise i key i value
console.log(mitar);

// 2.nacin
delete mitar["skola"];
// console.log(mitar);

// Napomena.
// Vrednosti nekog objekta mogu biti:
// Objekti,
// Nizovi,
// Funkcije,

// Konvertovanje objekta u niz
// Object.values(obj)
const niz = Object.values(mitar);
console.log(niz);

// Dodavanje novih svojstava:
mitar.punoletnost = true;
console.log(mitar);

// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

// root

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;
console.log(myCar);
myCar.povecanjeBrzine = function (ubrzanje) {
  if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) {
    return `Nije moguce voziti preko maksimalne brzine.`;
  } else {
    this.trenutnaBrzina += ubrzanje;
  }
};

myCar.povecanjeBrzine(30);
console.log(myCar);
// console.log(myCar.povecanjeBrzine(240));

myCar.smanjenjeBrzine = function (smanjenje) {
  if (this.trenutnaBrzina - smanjenje < 0) {
    return `Ne mozete smanjiti brzinu za tu vrednost.`;
  } else {
    this.trenutnaBrzina -= smanjenje;
  }
};

console.log(myCar.smanjenjeBrzine(40));
myCar.smanjenjeBrzine(25);
console.log(myCar);

myCar.koci = function () {
  this.trenutnaBrzina = 0;
};

myCar.koci();
console.log(myCar);

// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

// 2. Zadatak
//  const radnik = {
//     firstName: "Dzenan",
//      lastName : "Kosuta",
//      fullname:function(){
//      },
//      adresa:{
//          ulica:"avnoja",
//          broj:"bb",
//          grad:"Novi Pazar",
//          getAdress:function(){
// vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
//          }
//      }

// 3. Zadatak
// const automobil = {
//     marka: "Audi",
//     model: "Q7",
//     boja: "Bela",
//     pogon: "quattro",
//     menjac: "Automatik",
//     km:240000,
//     vlasnik:[062321552,063930630],
//     garaza:{
//         parking:"JKP Servis",
//         vikend:"od 17 free",
//         satnaKarta: "50",
//         dnevnaKarta: "200",
//         mesecnaKarta: "2000",
//         platiZa: function(od, do) {
//
// }
//     }
// }
