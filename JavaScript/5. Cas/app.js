// Interakcija sa korisnikom //

// prompt() metoda nam sluzi za komunikaciju sa korisnikom

const ime = prompt("Unesite vase ime")
console.log(ime)

// Sve sto korisnik unese je tipa string
const godine = prompt("Unesite vase godine")
console.log(godine)
console.log(typeof godine)

// Postoje 2 nacina za prevodjenje stringa u broj:


// 1. Number(promenljiva)
const brGodina = Number(godine)
console.log(brGodina)
console.log(typeof brGodina)

// 2. +promenljiva

const brGodina2 = +godine;
console.log(brGodina2);
console.log(typeof brGodina2);

const visina = +prompt("Unesite svoju visinu u centimetrima") 
console.log(visina)