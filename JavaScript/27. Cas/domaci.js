// Napraviti funkciju koja izracunava obim kruga, gde se poluprecnik unosi od strane korisnika.
// Napraviti funkciju koja izracunava povrsinu kruga, gde precnik predstavlja argument funkcije.
// Napraviti funkciju za pretvaranje radijana u stepene.

// 1.
function obimKruga(r) {
  return `Obim kruga je: ${(2 * r * Math.PI).toFixed(1)} cm.`;
}

console.log(obimKruga(20));
console.log(obimKruga(10));

// 2.
function povrsinaKruga(d) {
  return `Površina kruga je: ${(
    Math.PI *
    (d / 2) ** 2
  ).toFixed()} centimetara.`;
}
console.log(povrsinaKruga(20));
console.log(povrsinaKruga(10));

// 3.     1 rad = 57 stepeni // 57.295779513
function radianiUStepene(rad) {
  return `${rad} radijana je približno ${(rad * 57).toFixed()} stepeni.`;
}
console.log(radianiUStepene(3));
console.log(radianiUStepene(5));

let doh = "Doh";
let veciDoh = doh.toUpperCase;

console.log(typeof doh, typeof veciDoh);
