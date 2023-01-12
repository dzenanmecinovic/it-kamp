// Za dati niz izvrsiti:
// Sortiranje niza od najveceg ka najmanjem broju,
// Sortiranje niza od najmanjeg ka najvecem broju,
// Napraviti funkciju koja vraca najveci element niza,
// Napraviti funkciju koja vraca najmanji element niza (na 2 nacina).
const niz = [-5, 6, -10, 10, -100, 45, 99, -44];

// od najmanjeg do najveceg
niz.sort((a, b) => a - b);
console.log(niz);

// od najveceg do najmanjeg
niz.sort((a, b) => b - a);
console.log(niz);

// funkcija koja vraca najveci element niza
function max(niz) {
  var max = niz[0];
  for (var i = 0; i < niz.length; i++) {
    if (niz[i] > max) {
      max = niz[i];
    }
  }
  return max;
}

console.log(max(niz));

// funkcija koja vraca najmanji element niza
function min(niz) {
  let min = niz[0];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] < min) {
      min = niz[i];
    }
  }
  return min;
}
console.log(min(niz));

// root
// Napraviti funkciju koja vraca najveci element niza,
const brojevi = [-5, 6, 10, 45, 99, -44];

// I nacin

function maxEl(niz) {
  niz.sort((a, b) => b - a);
  return niz[0];
}
console.log(maxEl(brojevi));

// II nacin

console.log(Math.max.apply(null, brojevi));

// III nacin

function maxElement(niz) {
  let max = Number.NEGATIVE_INFINITY;
  for (let broj of niz) {
    if (broj > max) {
      max = broj;
    }
  }
  return max;
}

console.log(maxElement(brojevi));
