// 1. Zadatak:
// Napisati program na osnovu dva uneta od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti borjevi razliciti.

// 2. Zadatak:
// Korisnik unosi dva realna broja xi y. Napisati program koji izracunava i stampa
// Kolicnik x/y, ako je broj y ralizcit od nule,
// a inace ispisuje poruku: Deljenje nemoguce.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// PRVI ZADATAK ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let prvi = +prompt("Unesite prvi broj:");
let drugi = +prompt("Unesite drugi broj:");

if (prvi === drugi) {
  console.log("Povrsina kvadrata je:" + prvi * drugi + "m²");
} else if (prvi < 0) {
  console.log("Broj ne sme biti manje od 0");
} else if (drugi < 0) {
  console.log("Broj ne sme biti manji od 0");
} else if ((prvi = drugi)) {
  console.log("Povrsina pravougaonika je:" + prvi * drugi + "m²");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////// DRUGI ZADATAK ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let x = +prompt("Unesite deljenik");
let y = +prompt("Unesite delilac");

if (y > 0) {
  console.log("Količnik je" + " " + x / y);
} else {
  console.log("Deljenje nemoguće");
}
