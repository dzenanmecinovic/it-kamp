// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.
// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:
// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.
// 4. Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.
const brojevi = [-5, 4, 3, 10, 14, -5];

///////////////////////////////// prvi /////////////////////////////////
function nizVelikaSlova(niz) {
  const ispis = niz.map((element) => element.toUpperCase());
  return ispis;
}

console.log(nizVelikaSlova(["string", "test"]));
///////////////////////////////// drugi /////////////////////////////////
function kvadratiElemenata(niz) {
  const kvadrati = niz.map((element) => element ** 2);
  return kvadrati;
}
console.log(kvadratiElemenata([2, 4, 5, 6, 7, 8]));
///////////////////////////////// treci /////////////////////////////////
function kvadratniKoreni(niz) {
  const kvadratniKoreni = niz.map((element) => Math.sqrt(element));
  return kvadratniKoreni;
}
console.log(kvadratniKoreni([9, 4]));
///////////////////////////////// cetvrti /////////////////////////////////
const mapa = brojevi.map((element) =>
  element < 0 ? Math.abs(element) : element ** 2
);
console.log(mapa);
