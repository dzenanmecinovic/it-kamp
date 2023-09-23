"use strict";
// objekat1 = new Object({
//   ime: " Dzenan ",
//   prezime: " Mecinovic ",
// });

// console.log(objekat1);
// console.log(typeof objekat2)

// objekat2 = new Object({
//   ime: " Test ",
//   prezime: " Objekt ",
// });

// console.log(objekat2);

// console.log(objekat1, objekat2);

// niz1 = [objekat1, objekat2];

// console.log(niz1);
// console.log(typeof niz1);

// array = ["Array", 5, true, BigInt(250000000)];
// console.log(array);

// console.log(typeof array);
// upozorenje = ["Dzenan Mecinovic"];

// alert(array);
// alert(upozorenje);

// let broj = +prompt(
//   "Unesite PARAN broj da izracunate kvadrate brojeva od 1 do unetog broja:"
// );
// let iterator = 1;
// while (iterator <= broj) {
//   if (broj % 2 === 1) {
//     console.log("Broj mora biti paran");
//     break;
//   }
//   console.log(iterator ** 2);
//   iterator++;
// }

// for (i = 1; i <= broj; i++) {
//   if (broj % 2 === 1) {
//     console.log("Broj mora biti paran.");
//     continue;
//   } else if (isNaN(broj)) {
//     console.log("Broj mora imati korektne vrednosti.");
//     break;
//   }
//   console.log(i ** 2);
// }

// if (isNaN(broj)) {
//   console.log("Vrednost mora biti broj.");
// } else if (broj % 2 !== 1) {
//   console.log(broj * broj);
// } else if (broj % 2 == 1) {
//   console.log("Broj mora biti paran.");
// }

// for (i = 1; broj; i++) {
//   console.log(i);
// }

// var str = new String("Demo Text");
// document.write("Following is bigger text: " + str.big());
// let xnovii = +prompt(
//   "Unesite neki pozitivan broj koji je manji od 100 hiljada"
// );
// if (x < 0) {
//   document.write("Broj mora biti veci od 0, a manji od 100 hiljada");
// } else if (x >= 100000) {
//   document.write("Broj mora biti manji od 100 hiljada");
// } else if (isNaN(x)) {
//   document.write("Uneta vrednost mora biti broj.");
// } else {
//   document.write("Uneta vrednost je" + " " + x);
// }

// const array1 = ["a", "b", "c"];
// array1.forEach((element) => console.log(element));
// console.log(array1);

// 1. Zadatak:
// Napisati program na osnovu dva uneta od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti borjevi razliciti.

// 2. Zadatak:
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// Kolicnik x/y, ako je broj y ralizcit od nule,
// a inace ispisuje poruku: Deljenje nemoguce.

// const xprvii = +prompt("Unesite prvi pozitivan broj");
// const yprvii = +prompt("Unesite drugi pozitivan broj");

// if (isNaN(x) || isNaN(y)) {
//   console.log("Unete vrednosti moraju biti brojevi.");
// } else if (x < 0 || y < 0) {
//   console.log("Brojevi moraju biti pozitivni.");
// } else if (x === y) {
//   console.log("Povrsina kvadrata je " + x * y + " " + "kvadratnih metara.");
// } else {
//   console.log(
//     "Povrsina pravougaonika je" + " " + x * y + " " + "kvadratnih metara."
//   );
// }

// const x = +prompt("Unesite prvi(x) broj");
// const y = +prompt("Unesite drugi(y) broj");

// if (isNaN(x) || isNaN(y)) {
//   console.log("Unete vrednosti moraju biti brojevi.");
// } else if (y === 0) {
//   console.log("Deljenje nemoguce.");
// } else {
//   console.log("Kolicnik je " + x / y);
// }

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

// let counter = 0;
// let sum = 0;
// for (i = 3; i <= 17; i++) {
//   if (i % 3 === 0) {
//     counter++;
//     sum += i;
//   }
// }
// console.log(
//   "Aritmeticka sredina brojeva u intervalu od 3 do 13 je" + " " + sum / counter
// );

// let brojac = 0;
// let suma = 0;

// for (let i = 3; i <= 17; i++) {
//   if (i % 3 === 0) {
//     brojac++;
//     suma += i;
//   }
// }
// console.log(suma / brojac);
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.	(20) Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:

// (i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
// (ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
// (iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.

// for (i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FIZZ BUZ");
//   } else if (i % 3 === 0) {
//     console.log("FIZZ");
//   } else if (i % 5 === 0) {
//     console.log("BUZZ");
//   } else {
//     console.log(i);
//   }
// }

// 1. Napišite JAVASCRIPT kôd koji će do datuma 31.12.2015. prikazivati na Web stranici sliku
// bkgr1.jpg, a nakon tog datuma na istom mestu će se prikazivati slika bkgr2.jpg. To je korisno, ako,
// na primer, radite sajt za neku firmu i ako ste sigurni da će ona do 31.12.2015. biti na lokaciji koju
// prikazuje slika bkgr1.jpg, a nakon 31.12.2015. na lokaciji koju prikazuje bkgr2.jpg.
// Slike kreirate sami.
//  Ili ako kreirate sajt za npr. košarkaša XY koji je do datuma nosio dres kluba AB, a anon tog
// datuma će nosti dres kluba CD.

// var slika1 = '<img src="bkgr1.jpg">';
// var slika2 = '<img src="bkgr2.jpg">';
// var datum = new Date("2022-11-24"); /*danasnji datum*/
// function proveraisteka(datumisteka) {
//   var datisteka = new Date(datumisteka); /* datum isteka */
//   if (datum.getTime() <= datisteka.getTime()) {
//     document.write(slika1);
//   } else {
//     document.write(slika2);
//   }
// }

// console.log(new Date());

// const mojaFunkcija = function (recenica) {
//   if (recenica.length > 9) {
//     let Pola;
//     if (recenica.length % 2 === 0) {
//       Pola = recenica.length / 2;
//     } else if (recenica.length % 2 !== 0) {
//       Pola = Math.round(recenica.length / 2);
//     }
//     const isecak = recenica.slice(Pola, recenica.length);
//     const Nova = isecak.replace(/a/g, "B");
//     const konacna = "Ovo je novodobijena recenica".concat(" ", Nova);
//     return konacna;
//   } else {
//     const recenica2 = recenica.concat(
//       recenica.length,
//       " ",
//       "nedovoljno za dalje ispitivanje."
//     );
//     return recenica2;
//   }
// };

// console.log(mojaFunkcija("Kraj casa"));
// console.log(mojaFunkcija("Kraj caaasa je upravo sadaaaa."));

// const mojaFunkcijaaa = function (recenica) {
//   if (recenica.length > 9) {
//     let Pola;
//     if (recenica.length % 2 === 0) {
//       Pola = recenica.length / 2;
//     } else if (recenica.length % 2 !== 0) {
//       Pola = Math.round(recenica.length / 2);
//     }
//     const polovina = recenica.slice(Pola, recenica.length);
//     const izmena = polovina.replace(/a/g, "B");
//     const konacna = "Ovo je novodobijena recenica".concat(" ", izmena);
//     return konacna;
//   } else {
//     const recenica2 = recenica.concat(
//       recenica.length,
//       " ",
//       "nedovoljno za dalje ispitivanje."
//     );
//     return recenica2;
//   }
// };

// console.log(mojaFunkcija("Kraj casa"));
// console.log(mojaFunkcija("Kraj casaaaa"));
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

// const domaci = function () {
//   var uneta = prompt("Unesite recenicu");
//   uneta = uneta.replace(/skola/gi, "fakultet");
//   const velikim = uneta.toUpperCase();
//   const malim = uneta.toLowerCase();
//   let polaRecenice;
//   if (uneta.length % 2 === 0) {
//     polaRecenice = uneta.length / 2;
//   } else if (uneta.length % 2 !== 0) {
//     polaRecenice = Math.round(uneta.length / 2);
//   }
//   const prvaPol = recenica.slice(0, polaRecenice).toUpperCase();
//   const drugaPol = recenica
//     .substring(polaRecenice, recenica.length)
//     .toLowerCase();
//   const polaPola = prvaPol.concat(drugaPol);
//   const prvihDeset = uneta.substr(0, 10);
//   const poslednjihDeset = uneta.slice(-10);
//   return uneta.concat(
//     "\n",
//     velikim,
//     "\n",
//     malim,
//     "\n",
//     polaPola,
//     "\n",
//     prvihDeset,
//     "\n",
//     poslednjihDeset
//   );
// };

// console.log(domaci());

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.

// const domaciiii = () => {
//   const recenica = prompt("Unesite neku recenicu: ");
//   let polaDuzine;
//   //   if (recenica.length % 2 === 0) {
//   //     polaDuzine = recenica.length / 2;
//   //   } else {
//   //     polaDuzine = Math.round(recenica.length / 2);
//   //   }
//   polaDuzine =
//     recenica.length % 2 === 0
//       ? recenica.length / 2
//       : Math.round(recenica.length / 2);
//   const prva = recenica.toUpperCase();
//   const druga = recenica.toLowerCase();
//   const prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
//   const drugaPol = recenica
//     .substring(polaDuzine, recenica.length)
//     .toLowerCase();
//   //   const treca = prvaPol + drugaPol;
//   const treca = prvaPol.concat(drugaPol);
//   const cetvrta = recenica.replace(/skola/gi, "fakultet");
//   const peta = recenica.substr(0, 10);
//   const sesta = recenica.slice(-10);
//   return prva.concat(
//     "\n",
//     druga,
//     "\n",
//     treca,
//     "\n",
//     cetvrta,
//     "\n",
//     peta,
//     "\n",
//     sesta
//   );
// };

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.
// const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
// console.log(isecak);
// console.log(domaci());

// var getMax = function (str) {
//   var max = 0,
//     maxChar = "";
//   str.split("").forEach(function (char) {
//     if (str.split(char).length > max) {
//       max = str.split(char).length;
//       maxChar = char;
//     }
//   });
//   return maxChar;
// };

// console.log(getMax("radil funkcijaaaaaa"));

// function ponavljanjeKaraktera(string, brojPonavljanja) {
//   //   console.log(ponavljanjeKaraktera("abcddef", 2)) // [d]
//   //   console.log(ponavljanjeKaraktera("tfghhhplffzaaa", 3)) // [h, a]
//   var brojPonavljanja = 0,
//     maxChar = "";
//   string.split("").forEach(function (char) {
//     if (string.split(char).length > brojPonavljanja) {
//       brojPonavljanja = string.split(char).length;
//       maxChar = char;
//     }
//   });
//   return `${brojPonavljanja} karaktera imaju slova ${maxChar}`;
// }

// console.log(ponavljanjeKaraktera("testiranje zzzzzzzzzzzzzadate funkcije"));

// function stepenovanje(broj, n) {
//   let mnozenje = 1;
//   for (var i = 0; i < n; i++) {
//     mnozenje *= broj;
//   }
//   return mnozenje;
// }

// console.log(stepenovanje(2, 8));

// funkcija prompt za povrsinu pravougaonika
// function povrsinaPravougaonika() {
//         let a = +prompt("Unesite stranicu \"a\" pravougaonika ")
//         let b = +prompt("Unesite stranicu \"b\" pravougaonika ")
//         if(isNaN(a) || isNaN(b)) {
//                 console.log("Vrednosti moraju biti brojevi.")
//         } else if(a < 0 || b < 0) {
//                 console.log("Vrednosti moraju biti pozitivni brojevi.")
//         }
//         return "Povrsina pravougaonika je: " + a * b + " " + "kvadratnih metara.";
// }
// console.log(povrsinaPravougaonika())
// povrsinaPravougaonika()

// const objekat = {
//         ime:"Ime",
//         prezime:"Prezime"
//         }
// console.log(objekat)

// Funkcija za izracunavanje povrsine pravougaonika
// function pPravougaonika(a, b) {
//     return a * b;
//  }

// funkcija za pretvaranje metara i decimetara u centimetre
// function cm(metri, decimetri, centimetri) {
//     return 100*metri + 10* decimetri + centimetri
// }
// console.log(cm(5, 2, 1));
// funkcija za pretvaranje decimetara i centimetara u metre
// function m(metri, decimetri, centimetri) {
//     return metri + decimetri / 10 + centimetri / 100
// }
// console.log(m(3, 18, 57))

// izracunavanje povrsine pravougaonika cije su stranice :
// a = 0m 2dm 10cm
// b = 1m 0dm 35cm
// var a = cm(0, 2, 10)
// var b = cm(1, 0, 35)
// console.log(a, b) // 30, 135
// console.log(povrsinaPravougaonika(a, b)) // 4050
// console.log("Povrsina datog pravougaonika je " + pPravougaonika(a, b) + " kvadratnih centimetara.") // ispis povrsine u centimetrima

// var a = m(0, 2, 10)
// var b = m(1, 0, 35)
// console.log(a, b) // 0.3 , 1.35
// console.log("Povrsina datog pravougaonika je " + pPravougaonika(a, b) + " kvadratnih metara.") // ispis povrsine u metrima

// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.
// function razmaci() {
//   let recenica = prompt("Unesite neku recenicu:");
//   const duzina = recenica.length;
//   let recenica2 = "";
//   for (let i = 0; i < duzina; i++) {
//     if (recenica[i] !== " ") {
//       recenica2 += recenica[i];
//     }
//   }
//   console.log(recenica2);

//   let counter = 0;

//   for (i = 0; i < recenica.length; i++) {
//     if (recenica[i] == " ") counter++;
//   }
//   console.log("Ova recenica ima" + " " + counter + " " + "razmaka");
// }

// Napraviti novu Funkciju koja ce datu recenicu vratiti bez razmaka i izbrojati broj razmaka u unetoj recenici.

// function razmak() {
//   const recenica2 = prompt("Unesite neku recenicu");
//   let recenicaa2 = "";
//   let duzina = recenica2.length;
//   for (let i = 0; i < duzina; i++) {
//     if (recenica[i] !== " ") {
//       recenica2 += recenica[i];
//     }
//   }
//   console.log(`Recenica glasi ${recenica2}`);
//   // brojac
//   let counter = 0;
//   for (i = 0; i < duzina; i++) {
//     if (recenica[i] == " ") {
//       counter++;
//     }
//   }
//   console.log(`Broj razmaka u recenici je ${counter}.`);
// }

// razmak();
// const recenica3 =
//   "Danas su pocela cetvrtfinala svetskog prvenstva u fudbalu, danas je takodje bila dodela sertifikata.";
// const matchingDanas = recenica2.match("danas");
// const matchingDanas2 = recenica2.match(/danas/gi);
// console.log(matchingDanas);
// console.log(matchingDanas2);

// // Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako sto se kombinuju prvi sa prvim, drugi sa drugim, treci sa trecim znakom itd. Ako je jedan string duzi od drugog, na kraju samo dodati znakove viska. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

// function kombinovani(str1, str2) {
//   var a = str1.split("");

//   var b = str2.split("");

//   var spojeniString = "";

//   for (var i = 0; i < a.length || i < b.length; i++) {
//     if (i < a.length) {
//       spojeniString += a[i];
//     }
//     if (i < b.length) {
//       spojeniString += b[i];
//     }
//   }
//   return spojeniString;
// }
// console.log(kombinovani("treci tekst", "drugi string"));
// console.log(kombinovani("ab", "def"));

// function jeLiString(input) {
//   if (Object.prototype.toString.call(input) === "[object String]") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(jeLiString("kako fols"));
// console.log(jeLiString([1, 2, 3, 4]));

// // ako nesto nije string, vrati: uneta vrednost nije string

// function nijeString(input) {
//   if (jeLiString(input) === false) {
//     return `Taj input: ${input}, nije string.`;
//   } else {
//     return `Taj input: ${input}, jeste string.`;
//   }
// }
// var covek = {
//   ime: "NVIDIA",
// };
// console.log(nijeString("input input"));
// console.log(nijeString([1, 2, 3]));
// console.log(nijeString(covek));

// function jeLiBlanko(input) {
//   // if(input.length === 0) { // this also works
//   if (input === "") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(jeLiBlanko(""));
// console.log(jeLiBlanko("ee"));

// function svakaRecStringaUNiz(input) {
//   return input.split(" ");
// }
// function svakoSlovoStringaUNiz(input) {
//   return input.split("");
// }

// console.log(
//   svakaRecStringaUNiz("Svaka rec ovog stringa je odvojena u novodobijenom nizu")
// );
// console.log(
//   svakoSlovoStringaUNiz(
//     "Svaka rec ovog stringa je odvojena u novodobijenom nizu"
//   )
// );

// function skracenaForma(input) {
//   // Ime P.
//   let podeljeni = input.split(" ");
//   let prviDeo = podeljeni[0];
//   let drugiDeo = podeljeni[1];
//   return prviDeo + ` ` + drugiDeo[0] + `.`;
// }

// console.log(skracenaForma("Dzenan Mecinovic"));
// console.log(skracenaForma("Amir Zornic"));
// console.log(skracenaForma("Fatih Lukarcanin"));
// console.log(skracenaForma("Amar Lukic"));

// function parametarizacija(input) {
//   // console.log(string_parameterize("Robin Singh from USA."));
//   // "robin-singh-from-usa"
//   let tekst = input
//     .toLowerCase()
//     .replace(/[^a-zA-Z0-9 ]/, "")
//     .replace(/\s/g, "-");
//   return tekst;
// }

// console.log(parametarizacija("Dzenan Mecinovic iz srbije."));
// console.log(parametarizacija("John Kennedy from USA."));

// function prvoVeliko(input) {
//   // return input[0].toUpperCase() + input[];
//   let odvojeni = input.split("");
//   let prviVeliki = odvojeni[0].toUpperCase() + odvojeni.join("");
//   let konacni = prviVeliki.replace(input[0], "");
//   return konacni;
// }

// console.log(prvoVeliko("javascript"));
// console.log(prvoVeliko("python"));
// console.log(prvoVeliko("ceplusplus"));

// function novoVeliko(input) {
//   // let prvi = input.charAt(0)
//   // let prvoVeliko = input[0].toUpperCase() + input.slice(1);
//   let novoDobijeniString = "";
//   for (i = 0; i < input.length; i++) {
//     if (input[i - 1] === " ") {
//       novoDobijeniString += input[i].toUpperCase();
//     } else if (i === 0) {
//       novoDobijeniString += input[i].toUpperCase();
//     } else {
//       novoDobijeniString += input[i];
//     }
//   }
//   return novoDobijeniString;
// }

// console.log(novoVeliko("nova napravljena funkcija"));

// function prvoVelikoINTERNET(input) {
//   return input.charAt(0).toUpperCase() + input.slice(1);
// }

// console.log(prvoVelikoINTERNET("prvo slovo bi trebalo da bude veliko"));

// // 3.4. Саставити програм који за три унета цела броја исписује највећи.

// function najveciOdTri(a, b, c) {
//   max = a;
//   if (b > max) {
//     max = b;
//   }
//   if (c > max) {
//     max = c;
//   }
//   return max;
// }
// console.log(najveciOdTri(23, 102, 85));

// const odNajmanjegDoNajveceg = (a, b) => a - b;

// ///
// const niz = [1, 3, 4, 5, 6, 9, 23, 15, 55, 62, 63, 29, 72, 82, 52, 34];
// niz.sort(odNajmanjegDoNajveceg);
// console.log(niz);
// ///
// var firstName = "Dzenan";
// var lastName = "Mecinovic";

// var argument = firstName.split("");
// var argument2 = lastName.split("");

// var ispis = [argument.slice(0, 3) + argument2.slice(0, 2)];
// const result = ispis.replace(",", "");
// console.log(result);

// U nizu celih brojeva, sve elemente na parnim pozicijama treba uvećati za 1, a sve elemente na neparnim smanjiti za 1.
// const nizBrojeva = [1, 2, 3, 4, 5, 6];
// function uvecanjeZaJedan(niz) {
//   for (let i = 0; i < niz.length; i++) {
//     if (i % 2 == 0) {
//       niz[i] -= 1;
//     } else {
//       niz[i] += 1;
//     }
//   }
//   return niz;
// }
// console.log(uvecanjeZaJedan(nizBrojeva));

// Niz od N elemenata treba transformisati tako što elementi u svakom paru zamene pozicije. Podrazumeva se da je N parno.
// Npr. za niz brojeva [5,2,9,1,3,6] dobija se [2,5,1,9,6,3].

// function zamenaPozicija(niz) {
//   const ispis = [];
//   for (let i = 0; i < niz.length; i++) {
//     if (i === 0) {
//       ispis.push(niz[i + 1]);
//     } else if (i % 2 !== 0) {
//       ispis.push(niz[i - 1]);
//     } else if (i % 2 == 0) {
//       ispis.push(niz[i + 1]);
//     }
//   }
//   return ispis;
// }

// console.log(zamenaPozicija([5, 2, 9, 1, 3, 6]));

// U niz A od N elemenata treba ubaciti niz B od M elemenata, počev od zadate pozicije P. Podrazumeva se da je P u okviru niza A.
// Dakle, ako je niz A=[15,30,10,40,60], niz B=[2,6] i uneto P=3, treba da dobijemo niz A=[15,30,2,6,10,40,60].
// a = [15, 30, 10, 40, 60];
// b = [2, 6];
// function arrToArr(a, b, p) {
//   //   const noviNiz = [];
//   a.splice(p - 1, 0, b);
//   return a.flat();
// }
// console.log(arrToArr(a, b, 3));

// U niz A od N elemenata treba umetnuti novi elemenat X, posle prvog elementa koji je veći od X ili
//  na kraj niza ako takav elemenat ne postoji.
// Za uneto X=80 i niz , dobija se [57,30,95,80,17,22].
// const testNiz = [57, 30, 95, 17, 22];
// function umetanjeElemenata(arr, x) {
//   const prviVeci = arr.find((el) => el > x);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[prviVeci]) {
//       arr[i + 1].unshift(x);
//     }
//     return arr;
//   }
// }
// console.log(umetanjeElemenata(testNiz, 80));

// const prviVeci = testNiz.sort().find((el) => el > 29);
// console.log(prviVeci);

// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:

// var student = {
//   name: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
// };
// Sample Output: name,sclass,rollno

// const listProperties = (obj) => Object.keys(obj).toString();
// console.log(listProperties(student));

// delete property
// const student = {
//   names: "David Rayy",
//   sclass: "VI",
//   rollno: 12,
//   deleteProperty(property) {
//     console.log("delete ->", property);
//     delete this[property];
//     console.log(this);
//   },
// };

// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

// function copyObj(obj) {
//   const kopija = Object.entries(obj).map(([prvi, drugi]) => [drugi, prvi]);
//   return Object.fromEntries(kopija);
// }

// console.log(copyObj(student));

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
// const person = {
//   name: "Person",
//   lastName: "nosreP",
//   obj: {
//     prvi: "property",
//   },
// };
// function namesOfProperties(obj) {
//   return Object.keys(obj);
// }
// console.log(namesOfProperties(person));

// Napraviti funkciju koja ispituje argument.
// Ako se u recenici nadje rec "skola", neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true;
// Ako je recenica parne duzine neka se vrati broj pojavljivanja reci "kuca".

// function checkString(str) {
//   if (str.includes("skola")) {
//     return str.indexOf("skola");
//   } else if (str.startsWith("Automobil")) {
//     return true;
//   } else if (str.length % 2 == 0) {
//     const brojPojavljivanjaReciKuca = str.match(/kuca/gi);
//     return `Broj pojavljivanja reci kuca je ${brojPojavljivanjaReciKuca.length}.`;
//   }
// }
// console.log(checkString("Sutra pocinje skola"));
// console.log(checkString("Automobil je veoma skup"));
// console.log(checkString("kuca kuca "));

// // Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako sto se iz unetog stringa izbacuje svaka pojava znaka Z. Npr, za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr".

// function izbacivanjeZnaka(a, z) {
//   let b = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] !== z) {
//       b += a[i];
//     }
//   }
//   return b;
// }
// console.log(izbacivanjeZnaka("Madagaskar", "a"));

// // Za Domaci:
// // Proveriti da li je uneti string palindrom (potpuno je isti kada se cita otpozadi).

// function isPalindrom(str) {
//   const str2 = str.split().reverse().join();
//   if (str === str2) {
//     return true;
//   }
// }
// console.log(isPalindrom("anavolimilovana"));

// // Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

// const func = (str) => str.toLowerCase();
// console.log(func("WEBnSTUDY.com"));

// // Napraviti funkciju koja kod stringa koji predstavlja argument funkcije ispituje sledece:
// // Ako dati string ima vecu duzinu od 9:
// // Pravi novi string koji ce biti isecak od pola do kraja originalnog stringa. Nakon toga, novom stringu menjamo sva mala slova "a" sa "B", i funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica, " i poslednjeg izmenjenog isecka.
// // Ako string ima duzinu <= 9:
// // Funkcija treba vratiti poruku:
// // argument + {njena duzina} + "nedovoljno za dalje ispitivanje".

// function checkString2(str) {
//   const duzinaArgumenta = str.length;
//   const duzinaPolaOriginalnog = str.length / 2;
//   const polaOriginalnog = str.slice(duzinaPolaOriginalnog);
//   if (str.length > 9) {
//     const ispisPrvi = polaOriginalnog.replace(/a/g, "B");
//     return `Ovo je novodobijena recenica: ${ispisPrvi}`;
//   }
//   if (str.length <= 9) {
//     return `"${str}", sa duzinom od ${duzinaArgumenta} karaktera, nedovoljno za dalje ispitivanje.`;
//   }
// }
// console.log(checkString2("recenic"));

// // Napraviti funkciju koja ocekuje trocifren broj, a vraca dvocifren (iskljuci cifru desetice).

// function iskljuciDeseticu(broj) {
//   if (broj.toString().length !== 3) {
//     return `Samo trocifreni`;
//   } else {
//     return broj.toString().replace(broj.toString()[1], "");
//   }
// }
// console.log(iskljuciDeseticu(646));

// // Write a javaScript to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// function range(prvi, drugi) {
//   if (prvi >= 40 && prvi <= 60 && drugi >= 40 && drugi <= 60) {
//     return `Oba pripadaju opsegu 40..60`;
//   } else if (prvi >= 70 && prvi <= 100 && drugi >= 70 && drugi <= 100) {
//     return `Oba pripadaju opsegu 70..100`;
//   } else if (prvi >= 40 && prvi <= 60 && drugi >= 70 && drugi <= 100) {
//     return `Prvi pripada opsegu 40..60 a drugi opsegu 70..100`;
//   } else if (drugi >= 40 && drugi <= 60 && prvi >= 70 && prvi <= 100) {
//     return `Prvi pripada opsegu 70..100 a drugi 40..60`;
//   }
// }
// console.log(range(50, 90));
// console.log(range(90, 50));
// console.log(range(50, 50));
// console.log(range(90, 90));
// // Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

// function veciURange(prvi, drugi) {
//   if (prvi < 40 || prvi > 60 || drugi < 40 || drugi > 60) {
//     return `Neki od argumenata je van opsega.`;
//   } else if (prvi > drugi) return `Prvi broj je veci od drugog.`;
//   else if (prvi < drugi) return `Prvi broj je manji od drugog.`;
// }
// console.log(veciURange(42, 61));
// console.log(veciURange(55, 42));

// // 32. Write a JavaScript program to find a value which is nearest do 100 from two different given integer values.

// function bliziSto(prvi, drugi) {
//   const prviPrvi = Math.abs(prvi - 100); //
//   const drugiDrugi = Math.abs(drugi - 100); //
//   if (prviPrvi > drugiDrugi) return `Drugi je blizi sto`;
//   if (prviPrvi < drugiDrugi) return `Prvi je blizi sto`;
// }

// console.log(bliziSto(102, 103));

// pronalazenje svih stringova koji pocinju odredjenim slovom

// const imena = [
//   "Mehmed",
//   "Muhamed",
//   "Samed",
//   "Dzenan",
//   "Merisa",
//   "Ismail",
//   "Ishak",
//   "Petar",
//   "Veljko",
// ];
// function findElement(niz, char) {
//   for (let i of niz) {
//     if (i.startsWith(char)) {
//       console.log(niz.indexOf(i) + 1);
//     }
//   }
// }

// findElement(imena, "M");

// Create a function which returns the number of true values there are in an array.
// All array items are of the type bool (true or false).

// function trueCounter(arr) {
//   if (arr == "") return 0;
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == true) counter++;
//   }
//   return counter;
// }
// console.log(trueCounter([true, false, true, true]));

// Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr) {
//   function everyNumber(array) {
//     return Number(array);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (everyNumber) {
//       return arr[0];
//     }
//   }
// }

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

// Write a function that converts hours into seconds.

// function howManySeconds(hours) {
//   return hours * 60 * 60;
// }

// console.log(howManySeconds(2));
// console.log(howManySeconds(10));
// console.log(howManySeconds(24));

// Create a function that takes two numbers as arguments and returns their sum.

// function sum(x, y) {
//   return x + y;
// }
// console.log(sum(3, 2));
// console.log(sum(-3, -6));
// console.log(sum(7, 3));

//There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

// function remainder(x, y) {
//   return x % y;
// }

// console.log(remainder(1, 3));
// console.log(remainder(3, 4));
// console.log(remainder(-9, 45));
// console.log(remainder(5, 5));

// Write a function that returns the string "something" joined with a space " " and the given argument a.
// Assume an input is given.

// const giveMeSomething = (a) => "something" + " " + a;
// console.log(giveMeSomething("is better than nothing"));

// Write a function that takes the base and height of a triangle and return its area.
// function triArea(base, height) {
//   return (base * height) / 2;
// }
// console.log(triArea(3, 2));
// console.log(triArea(7, 4));
// console.log(triArea(10, 10));

// 1 house is 6 matches, the others are 1st + 5 matches. Func:

// function matchHouses(num) {
//   let def = 6;
//   if (num === 0) return 0;
//   if (num === 1) return def;
//   if (num > 1) {
//     return (def += 5 * num + 1 - def);
//   }
// }

// console.log(matchHouses(1));
// console.log(matchHouses(4));
// console.log(matchHouses(87));

// Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".
// "red flag".match(REGEXP)  // red
// "blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".
//   examples
// "red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]
// "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]

// const REGEXP = /red flag|blue flag/g;
// console.log(
//   "pink flag red flag black flag blue flag green flag red flag ".match(REGEXP)
// );

//The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.
// Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.

// RegEx

// function shiftToLeft(x, y) {
// return x * 2 ** y;
// }
// console.log(leftShift(5, 2));
// console.log(leftShift(10, 3));
// console.log(leftShift(-32, 2));
// console.log(leftShift(-6, 5));
// console.log(leftShift(12, 4));
// console.log(leftShift(46, 6));

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr) {
//   for (let i of arr) {
//     if (arr[i] == 1) return [i, i];
//   }
//   return [Math.min(...arr), Math.max(...arr)];
// }

// console.log(minMax([1, 2, 3, 4, 5]));
// console.log(minMax([2334454, 5]));
// console.log(minMax([1]));
//

// Create a function that returns an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// function compact(arr) {
//   arr = arr.filter(function (n) {
//     return (
//       n !== undefined &&
//       n !== null &&
//       n !== false &&
//       n !== 0 &&
//       n !== "" &&
//       isNaN() != NaN
//     );
//   });
//   return arr;
// }
// console.log(compact([0, null, "", 1, 2, 3, "Tekst"]));

// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// example : largestSwap(27) -> false ((72>27))

// function largestSwap(num) {
//   var ispis = String(num);
//   if (ispis[1] + ispis[0] > ispis[0] + ispis[1]) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(largestSwap(14));
// console.log(largestSwap(53));
// console.log(largestSwap(99));
// let num = 14;
// let konzol = String(num);
// console.log(konzol[1] + konzol[0]);
// console.log(konzol[0] + konzol[1]);

// 27

// 2 >= 7 false

// 42

// 4 >= 2 true

// Create a function that moves all capital letters to the front of a word.

// function capToFront(s) {
//   let malaSlova = "";
//   let velikaSlova = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s[i].toUpperCase()) {
//       velikaSlova += s[i];
//     } else if (s[i] === s[i].toLowerCase()) {
//       malaSlova += s[i];
//     }
//   }
//   return velikaSlova.concat(malaSlova);
// }

// console.log(capToFront("dvPIHAs"));

/* When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

 RT = R1 + R2 + R3 ...

 Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International Systemof Units ( SI ). */

// function seriesResistance(arr) {
//   let newArr = arr.reduce((a, b) => a + b);
//   return `${newArr} ohms.`;
// }

// console.log(seriesResistance([1, 5, 6, 3]), "15 ohms");
// console.log(seriesResistance([0.2, 0.3, 0.4]), "0.9 ohm");
// console.log(seriesResistance([10, 12, 1, 10]), "33 ohms");
// console.log(seriesResistance([10, 13, 3.8, 20, 10]), "56.8 ohms");
// console.log(seriesResistance([0.5, 0.5]), "1 ohm");
// console.log(seriesResistance([16, 30, 22.8, 4]), "72.8 ohms");
// console.log(seriesResistance([20, 15, 32.5, 2]), "69.5 ohms");
// console.log(seriesResistance([52, 22, 20, 30]), "124 ohms");
// console.log(seriesResistance([10, 12, 32, 4.9, 5, 6, 71]), "140.9 ohms");

// Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// function addName(obj, name, value) {
//   obj[name] = value;
//   return obj;
// }

// console.log(addName({ piano: 500 }, "Brutus", 400));

// Write a function that converts an object into an array of keys and values.

// function objectToArray(obj) {
//   return Object.entries(obj);
// }

// console.log(
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3,
//   })
// );

// console.log(
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10,
//   })
// );

// Try finding your ancestors and offspring with code.
// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

// function generation(x, y) {
//   if ((x >= -3 && x <= 3 && y == "m") || y == "f") {
//     if (x === -3 && y == "m") {
//       return `great grandfather`;
//     }
//     if (x === -3 && y == "f") {
//       return `great grandmother`;
//     }
//     if (x === -2 && y == "m") {
//       return `grandfather`;
//     }
//     if (x === -2 && y == "f") {
//       return `grandmother`;
//     }
//     if (x === -1 && y == "m") {
//       return `father`;
//     }
//     if (x === 0 && (y == "m" || y == "f")) {
//       return `me!`;
//     }
//     if (x === 1 && y == "m") {
//       return `son`;
//     }
//     if (x === 1 && y == "f") {
//       return `daughter`;
//     }
//     if (x === 2 && y == "m") {
//       return `grandson`;
//     }
//     if (x === 2 && y == "f") {
//       return `granddaughter`;
//     }
//     if (x === 3 && y == "m") {
//       return `great grandson`;
//     }
//     if (x === 3 && y == "f") {
//       return `great granddaughter`;
//     }
//   }
// }

// console.log(generation(2, "f"));
// console.log(generation(-3, "m"));
// console.log(generation(1, "f"));

// Write a JavaScript function to get the current date. Go to the editor
// Note : Pass a separator as an argument.

// function currentDate(s) {
//   const datum = new Date();
//   return `${datum.getDate()}${s}${
//     datum.getMonth() + 1
//   }${s}${datum.getFullYear()}`;
// }

// console.log(currentDate("/"));
// console.log(currentDate("-"));

// Write a JavaScript function to get the number of days in a month.
// ako februar ima 29 dana, to je prestupna godina.

// function numberOfDaysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }
// console.log(numberOfDaysInMonth(1, 2012));
// console.log(numberOfDaysInMonth(2, 2013));
// console.log(numberOfDaysInMonth(2, 2008));

// Prime num

// const primeNum = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//     if (num % i === 0) return false;
//   }
//   return num > 1;
// };

// console.log(primeNum(7));
// console.log(primeNum(4));
// console.log(primeNum(3));
// console.log(primeNum(2));

// const niz = [2, 5, 9, 10];
// const konzol = niz.find((br) => br > 10) || "Error"; // operator OR vraca prvu vrednost ako je True, ako nije onda vraca drugu.
// console.log(konzol);

// const dzenan = {
//   name: "Dzeno",
//   age: 19,
//   email: {
//     prvi: `mecinovicdz@gmail.com`,
//     drugi: `mecinovicd@gmail.com`,
//   },
// };

// console.log(false || true); // ako je prva false, uzmi true.
// console.log(dzenan?.emajl?.prvi ?? "Nema"); // ako je prva vrednost null ili undefined, uzmi drugu vrednost.
// console.log(dzenan?.emajl?.drugi && "Nema"); // ako je prva true, uzmi false. A ako su sve true, uzmi poslednju true.

// function unos() {
//   prozor();
//   function prozor() {
//     const prozorcic = prompt("", "Unesite email");
//     if (!prozorcic.includes("@")) {
//       prozor();
//     }
//     const output = prozorcic.split("@");
//     console.log(prozorcic.slice(-1, -5).padStart(10, "*"));
//   }
// }

// unos();

// let provera = true && NaN;
// console.log(provera);

// let email = "ovojettre@outlook.com";
// let isecen = email.slice(0, email.length / 3);
// let ostatakEmaila = email.slice(email.length / 4, email.length);
// let finish = ostatakEmaila.padStart(email.length, "*");
// console.log(finish);
