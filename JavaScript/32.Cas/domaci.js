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
////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////
function neparniBrojevi(niz) {
  let neparni = [];
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] % 2 !== 0) {
      neparni.push(niz[i]);
    }
  }
  return neparni;
}
console.log(
  neparniBrojevi([2, 4, 5, 6, 7, 3, 2, 3, 4, 5, 1, 2, 3, 4, 5, -23, -21])
);
/////////////////////////////////////////////////////////////////////////////////
function parnePozicije(niz) {
  let parne = [];
  for (let i = 0; i < niz.length; i++) {
    if (i % 2 !== 0) {
      parne.push(niz[i]);
    }
  }
  return parne;
}
console.log(parnePozicije([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
