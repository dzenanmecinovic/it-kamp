// Napraviti funkciju koja vraca novi niz, gde je svaki element objekat sa vrednostima title i budget.
const movies = [
  { title: "Inception", rating: 8, budget: "230M" },
  { title: "Interstelar", rating: 5, budget: "200M" },
  { title: "Godfather", rating: 9, budget: "280M" },
  { title: "Home Alone", rating: 4, budget: "300M" },
];

const movies2 = movies.map((element) => {
  return {
    title: element.title,
    budget: element.budget,
  };
});

console.log(movies2);

// Domaci zadatak:
// Napraviti niz objekata, gde ce svaki objekat sadrzati: ime, prezime, starost, bojaOciju, bojaKose, polozenC.
// Napraviti funkciju koja pravi novi niz koji ce da sadrzi one elemente cija boja ociju je broan i koji nisu polozili C.

function User(ime, prezime, starost, bojaOciju, bojaKose, polozenC) {
  this.ime = ime;
  this.prezime = prezime;
  this.starost = starost;
  this.bojaOciju = bojaOciju;
  this.bojaKose = bojaKose;
  this.polozenC = polozenC;
}

const grupa = [];
