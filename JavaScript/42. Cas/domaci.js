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

// 1. Zadatak
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

const prvi = {
  firstName: "Dzenan",
  lastName: "Mecinovic",
  language: [],
  nickName: "",
  setLanguage: function (parametar) {
    this.language.push(parametar);
  },
  //   setNickName: () => {
  //     return (this.nickName +=
  //       this.firstName.slice(0, 2) + this.lastName.slice(0, 2).toLowerCase());
  //   },
};

prvi.setLanguage("Engleski");
prvi.setLanguage("Nemacki");
console.log(prvi);

// prvi.setNickName();
// console.log(prvi);

// 2. Zadatak
const radnik = {
  firstName: "Dzenan",
  lastName: "Kosuta",
  fullName: function () {
    this.fullName = this.firstName + " " + this.lastName;
  },
  adresa: {
    ulica: "avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      this.getAdress = `${radnik.fullName} zivi u ulici ${this.ulica} u Novom Pazaru.`;
      // vraca Dzenan Kosuta zivi u ulici Avnoja u Novom Pazaru.
    },
  },
};

radnik.fullName();
// console.log(radnik);
radnik.adresa.getAdress();
console.log(radnik);

// 3. Zadatak // - NIJE GOTOVO
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: [062321552, 063],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function () {},
  },
};
