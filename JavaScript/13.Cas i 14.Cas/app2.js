// Funkcija u JavaScriptu predstavlja blok koda koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem:
// 1. function keyword
// 2. arrow function sintakse.

// 1. function keyword:

// Pravimo funkciju koja sabira broj 3 i broj 5:
// function zbirTriIPet() {
//     const zbir = 3 + 5;
//     return zbir;
    //   return 25 sve nakon return u function scope se zanemaruje
    //   const omar = "Omar"
  // }
  
  // console.log(zbirTriIPet());
  
  // Pravimo funkciju koja sabira dva broja:
  // function zbirDvaBroja(par1, par2) {
    // par1 i par2 predstavljaju parametre funkcije
  //   return par1 + par2;
  // }
  
  // console.log(zbirDvaBroja(5, 22)); // 5 i 22 predstavljaju argumente funkcije
  
  // Napraviti funkciju koja vraca zbir kvadrata dva broja.
  // function zbirKvadrata(a, b) {
    // return a ** 2 + b ** 2;
  // }
  // console.log(zbirKvadrata(5, 4));
//   console.log(zbirKvadrata(5)); - NaN
  
  // Defaultna vrednost nekog parametra:
  // Napraviti funkciju koja vraca zbir kvadrata dva broja. Ako se izostavi drugi argument, funkcija ga racuna kao 0.
  // 1. Nacin
  // function zbirKvadrata2(a, b) {
  //   if (b === undefined) {
  //     return a ** 2;
  //   } else {
  //     return a ** 2 + b ** 2;
  //   }
  // }
  // console.log(zbirKvadrata2(2, 3));
  // console.log(zbirKvadrata2(2));
  
  // 2. Nacin
  // Defaultne vrednosti se stavljaju na kraju!!
  // Ne moze neka defaultna vrednost biti definisana pre obavezne!
  // function zbirKvadrata3(a, b = 0) {
  //   return a ** 2 + b ** 2;
  // }
  // console.log(zbirKvadrata3(5));
  // console.log(zbirKvadrata3(5, 1));
  
  // Jos jedan nacin definisanja funkcije preko function keyword:
  
  // const aritmetickaSredina = function (par1 = 1, par2 = 1, par3 = 1) {
  //   return (par1 + par2 + par3) / 3;
  // };
  
  // console.log(aritmetickaSredina(4, 5, 3));
  // console.log(aritmetickaSredina(4, 5));
  // console.log(aritmetickaSredina());
  
  // Napraviti funkciju povrsina koja uzima dve vrednosti.
  // Ako su te dve vrednosti jednake da vraca povrsinu kvadrata uz odredjenu poruku,
  // dok ako su razlicite vrednosti da vraca povrsinu pravougaonika uz odredjenu poruku.
  // const povrsina = function (a, b) {
  //   if (a === b) {
  //     return "Povrsina kvadrata iznosi " + a * b;
  //   } else {
  //     return "Povrsina pravougaonika iznosi " + a * b;
  //   }
  // };
  
  // console.log(povrsina(4, 6));
  // console.log(povrsina(4, 4));

// 3.	(20)
//  let recenica1;
// recenica1 = "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

// function novaRecenica(recenica) {
//   let recenica2 = ""
//   for (let i = 0; i <= recenica.length; i++) {
//     if (i === recenica.length) {
//       recenica2 += ".";
//     } else if(recenica[i] === "a" || recenica[i] === "a" || recenica[i] === "e"  || recenica[i] === "i"  || recenica[i] === "o" || recenica[i] === "u" ) {
//       recenica2 += recenica[i].toUpperCase();
//     } else {
//       recenica2 += recenica[i];
//     }
//   }
//   return recenica2;
// }

// console.log(novaRecenica(recenica1));


// 2. Arrow function:

// const myFunction = () => {
    // function code
// }

// const proizvodDvaBroja = (br1, br2) => {
//   return br1 * br2;
// };

// console.log(proizvodDvaBroja(2, 16))

// Ako Arrow funkcija ima samo jedan parametar, nije neophodno okruziti ga zagradama.
// Ako je funkcija jednostavna, tj. ako odmah vraca neki jednostavan izraz onda sama sintaksa izgleda kraca (nije neophodno koristiti viticaste zagrade i return keyword)

// const kvadratBroja = broj => broj ** 2
// console.log(kvadratBroja(10))

// let broj;
// const vrednost = () => {
//   const korisnik = +prompt("Unesite neku vrednost:")
//   if(isNaN(korisnik)) {
//     return "Uneta vrednost nije broj."
//   } else if(korisnik < 0) {
//     return "Uneta vrednost je negativan broj."
//   } else if(korisnik === 0) {
//     return "Uneta je nula."
//   } else if(korisnik > 0) {
//     return "Uneta vrednost je pozitivan broj."
//   }
// }

// console.log(vrednost())

// const mail = function(satnica, minutnica) {
//   if(satnica >= 9 && satnica < 17 && minutnica >= 0 && minutnica < 60) {
//   return "Mejl je poslat u toku radnog vremena";
// } else {
//   return "Mejl nije poslat u toku radnog vremena";
// };
// };

// console.log(mail(20, 12))
// console.log(mail(14, 30))

const mejl = function(satnica, minutnica) {
  if(satnica >= 9 && satnica < 17 && minutnica >= 0 && minutnica < 60) {
  return "Mejl je poslat u toku radnog vremena"
} else {
  return "Mejl nije poslat u toku radnog vremena"
}
};

console.log(mejl(10, 50))
console.log(mejl(13, 59))
console.log(mejl(8, 30))

var slika1 = '<img src="bkgr1.jpg">';
var slika2 = '<img src="bkgr2.jpg">';
var datum = new Date(); /*danasnji datum*/
function proveraisteka(datumisteka){
var datisteka = new Date(datumisteka); /* datum isteka */
if (datum.getTime() <= datisteka.getTime()) {
document.write(slika1); }
else {
document.write(slika2);
}
};