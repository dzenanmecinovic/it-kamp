// Na osnovu stringa koji unosi korisnik napraviti niz, gde cemo ispitati da li se jagoda nalazi unutar tog niza. Ako se jagoda ne nalazi unutar niza, funkcija neka vrati taj niz poredjan abecedno, s tim sto ce se na prvom mestu dodati broj 10, a na poslednjem broj 100.
// Dok ako se jagoda nalazi unutar niza vratiti poziciju gde se ona nalazi.
"use strict";

const niz = ["ovo", "je", "neki", "niz"];
const nalaziSe = niz.some((el) => el == "string");
console.log(nalaziSe);
if (nalaziSe) {
  return niz.findIndex((el) => el == "jagoda");
} else {
  niz.push(10).pop(100).sort();
}
console.log(nalaziSe);
