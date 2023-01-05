// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.

const niz = ["cetvrtak", "petak", "subota"];

niz.unshift("sreda");
console.log(niz);

console.log(niz.unshift("ponedeljak", "utorak"));
console.log(niz);

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1.
// shift() metoda vraca izbrisani element. Kao kod pop() metode.

console.log(niz.shift());
console.log(niz);

// delete keyword za brisanje odredjenog elementa unutar niza:
// Preko delete keyword mozemo izbrisati bilo koji element iz niza ali na taj nacin ostavljamo rupe u nizu (undefined vrednosti).
console.log(niz.length);
delete niz[4];
console.log(niz);

// concat() metoda se koristi za spajanje nizova. concat() metoda pravi novi niz.
// S tim sto kao argument mozemo poslati i string, ne mora iskljucivo biti niz.

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const grupa = muskarci.concat(devojke, "Mehmed", "Omar");
console.log(grupa);

// Iz naseg niza grupa napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.
// root
const podeliNiz = (niz) => {
  const muskarci = [];
  const devojke = [];
  for (let osoba of niz) {
    if (osoba === "Omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Od niza 'niz', dobili smo nizove:\n [${devojke}],\n i niz\n [${muskarci}].`;
};

console.log(podeliNiz(grupa));

// Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji se nalaze na neparnim pozicijama unutar originalnog niza.

function samoNeparni(niz) {
  let noviNiz = [];
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 === 0) {
      noviNiz.push(niz[i]);
    }
  }
  return `Novi niz sa elementima koja se nalaze samo na neparnim pozicijama je [${noviNiz}].`;
}

console.log(samoNeparni(grupa));
console.log(grupa);

// Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji se nalaze na parnim pozicijama unutar originalnog niza.
// Iz nekog niza izdvojiti sve parne brojeve.
// Iz nekog niza izdvojiti sve neparne brojeve.
// Iz nekog niza izdvojiti sve pozitivne brojeve.

function parniBrojevi(niz) {
  let parni = [];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 === 0) {
      parni.push(niz[i]);
    }
  }
  return `${parni}`;
}

console.log(parniBrojevi([1, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 8]));

function pozitivniBrojevi(niz) {
  let pozitivni = [];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      pozitivni.unshift(niz[i]);
    }
  }
  return `${pozitivni}`;
}

console.log(pozitivniBrojevi([-42, 2, 5, 3, -525, 424]));
