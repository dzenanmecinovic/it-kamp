const amer = {
  firstName: "Amer",
  lastName: "Honic",
  age: 19,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const emin = {
  firstName: "Emin",
  lastName: "Zukanovic",
  age: 19,
};

// Pozivanje neke funkcije za odredjeni objekat se moze izvrsiti pomocu funkcija:
// 1. call();
// 2. apply();
// 3. bind();

// Prvo treba pristupiti funkciji, pa onda objasniti na kom se objektu treba primeniti.

console.log(amer.fullName.call(emin));

// 2. primer

const restoran1 = {
  hrana: "Spagetti",
  gosti: "veoma zadovoljni",
  lokacija: "Stevana Nemanje, 64",
};

const restoran2 = {
  hrana: "Burek",
  gosti: "zgadjeni",
  lokacija: "Stanice Spasojevic, 40",
};

function poruka(mesto, drzava) {
  return `Vecerasnji specijalitet u nasem restoranu je bio ${this.hrana}. Nasi gosti su ${this.gosti}, te smo srecni zbog toga. \n Nalazimo se u ulici ${this.lokacija}, u ${mesto}, ${drzava}.`;
}

// call() metoda za prvi argument ima objekat na koji se primenjuje, ostali argumenti metode koja se izvrsava.

console.log(poruka.call(restoran1, "Novi Pazar", "Srbija"));

// apply() metoda za prvi argument ima objekat na koji se primenjuje, drugi argument je niz gde smestamo argumente metode koja se izvrsava,

console.log(poruka.apply(restoran2, ["Sarajevo", "Bosna i Hercegovina"]));

// bind() zahteva prethodno definisanje promenljive (funkcije) za odredjeni objekat, pa onda pozivanje funkcije sa eventualnim argumentima.

const bindFunction = poruka.bind(restoran1);
console.log(bindFunction("Novi Sad", "Srbija"));

//                  domaci
/* Napraviti funkciju koja ce povecati vrednost satne, dnevne i mescne karte za po 20%.
    Za bilo koji objekat koji ima propeprties: satnaKarta, dnevnaKarta i mesecnaKarta.
    Nakon toga je primeniti za automobil objekat i ispisati automobil nako ntoga.
*/

// write a js func to retrieve all the values of an object's properties.
const obj = {
  marka: "Audi",
  model: "A6",
};

const getValues = (obj) => {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
};
