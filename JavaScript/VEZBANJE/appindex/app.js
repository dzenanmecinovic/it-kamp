objekat1 = new Object({
  ime: " Dzenan ",
  prezime: " Mecinovic ",
});

console.log(objekat1);
// console.log(typeof objekat2)

objekat2 = new Object({
  ime: " Test ",
  prezime: " Objekt ",
});

console.log(objekat2);

console.log(objekat1, objekat2);

niz1 = [objekat1, objekat2];

console.log(niz1);
console.log(typeof niz1);

array = ["Array", 5, true, BigInt(250000000)];
console.log(array);

console.log(typeof array);
upozorenje = ["Dzenan Mecinovic"];

alert(array);
alert(upozorenje);

let broj = +prompt(
  "Unesite PARAN broj da izracunate kvadrate brojeva od 1 do unetog broja:"
);
let iterator = 1;
while (iterator <= broj) {
  if (broj % 2 === 1) {
    console.log("Broj mora biti paran");
    break;
  }
  console.log(iterator ** 2);
  iterator++;
}

for (i = 1; i <= broj; i++) {
  if (broj % 2 === 1) {
    console.log("Broj mora biti paran.");
    continue;
  } else if (isNaN(broj)) {
    console.log("Broj mora imati korektne vrednosti.");
    break;
  }
  console.log(i ** 2);
}

if (isNaN(broj)) {
  console.log("Vrednost mora biti broj.");
} else if (broj % 2 !== 1) {
  console.log(broj * broj);
} else if (broj % 2 == 1) {
  console.log("Broj mora biti paran.");
}

for (i = 1; broj; i++) {
  console.log(i);
}

var str = new String("Demo Text");
document.write("Following is bigger text: " + str.big());
let xnovii = +prompt(
  "Unesite neki pozitivan broj koji je manji od 100 hiljada"
);
if (x < 0) {
  document.write("Broj mora biti veci od 0, a manji od 100 hiljada");
} else if (x >= 100000) {
  document.write("Broj mora biti manji od 100 hiljada");
} else if (isNaN(x)) {
  document.write("Uneta vrednost mora biti broj.");
} else {
  document.write("Uneta vrednost je" + " " + x);
}

const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
console.log(array1);

// 1. Zadatak:
// Napisati program na osnovu dva uneta od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti borjevi razliciti.

// 2. Zadatak:
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// Kolicnik x/y, ako je broj y ralizcit od nule,
// a inace ispisuje poruku: Deljenje nemoguce.

const xprvii = +prompt("Unesite prvi pozitivan broj");
const yprvii = +prompt("Unesite drugi pozitivan broj");

if (isNaN(x) || isNaN(y)) {
  console.log("Unete vrednosti moraju biti brojevi.");
} else if (x < 0 || y < 0) {
  console.log("Brojevi moraju biti pozitivni.");
} else if (x === y) {
  console.log("Povrsina kvadrata je " + x * y + " " + "kvadratnih metara.");
} else {
  console.log(
    "Povrsina pravougaonika je" + " " + x * y + " " + "kvadratnih metara."
  );
}

const x = +prompt("Unesite prvi(x) broj");
const y = +prompt("Unesite drugi(y) broj");

if (isNaN(x) || isNaN(y)) {
  console.log("Unete vrednosti moraju biti brojevi.");
} else if (y === 0) {
  console.log("Deljenje nemoguce.");
} else {
  console.log("Kolicnik je " + x / y);
}

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

let counter = 0;
let sum = 0;
for (i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    counter++;
    sum += i;
  }
}
console.log(
  "Aritmeticka sredina brojeva u intervalu od 3 do 13 je" + " " + sum / counter
);

let brojac = 0;
let suma = 0;

for (let i = 3; i <= 17; i++) {
  if (i % 3 === 0) {
    brojac++;
    suma += i;
  }
}
console.log(suma / brojac);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.	(20) Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:

// (i)	ako je broj deljiv sa 3, potrebno je ispisati ???FIZZ??? umesto tog broja;
// (ii)	ako je broj deljiv sa 5, potrebno je ispisati ???BUZZ??? umesto tog broja;
// (iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ???FIZZ BUZZ??? umesto tog broja.

for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}

// 1. Napi??ite JAVASCRIPT k??d koji ??e do datuma 31.12.2015. prikazivati na Web stranici sliku
// bkgr1.jpg, a nakon tog datuma na istom mestu ??e se prikazivati slika bkgr2.jpg. To je korisno, ako,
// na primer, radite sajt za neku firmu i ako ste sigurni da ??e ona do 31.12.2015. biti na lokaciji koju
// prikazuje slika bkgr1.jpg, a nakon 31.12.2015. na lokaciji koju prikazuje bkgr2.jpg.
// Slike kreirate sami.
//  Ili ako kreirate sajt za npr. ko??arka??a XY koji je do datuma nosio dres kluba AB, a anon tog
// datuma ??e nosti dres kluba CD.

var slika1 = '<img src="bkgr1.jpg">';
var slika2 = '<img src="bkgr2.jpg">';
var datum = new Date("2022-11-24"); /*danasnji datum*/
function proveraisteka(datumisteka) {
  var datisteka = new Date(datumisteka); /* datum isteka */
  if (datum.getTime() <= datisteka.getTime()) {
    document.write(slika1);
  } else {
    document.write(slika2);
  }
}

console.log(new Date());

const mojaFunkcija = function (recenica) {
  if (recenica.length > 9) {
    let Pola;
    if (recenica.length % 2 === 0) {
      Pola = recenica.length / 2;
    } else if (recenica.length % 2 !== 0) {
      Pola = Math.round(recenica.length / 2);
    }
    const isecak = recenica.slice(Pola, recenica.length);
    const Nova = isecak.replace(/a/g, "B");
    const konacna = "Ovo je novodobijena recenica".concat(" ", Nova);
    return konacna;
  } else {
    const recenica2 = recenica.concat(
      recenica.length,
      " ",
      "nedovoljno za dalje ispitivanje."
    );
    return recenica2;
  }
};

console.log(mojaFunkcija("Kraj casa"));
console.log(mojaFunkcija("Kraj caaasa je upravo sadaaaa."));

const mojaFunkcijaaa = function (recenica) {
  if (recenica.length > 9) {
    let Pola;
    if (recenica.length % 2 === 0) {
      Pola = recenica.length / 2;
    } else if (recenica.length % 2 !== 0) {
      Pola = Math.round(recenica.length / 2);
    }
    const polovina = recenica.slice(Pola, recenica.length);
    const izmena = polovina.replace(/a/g, "B");
    const konacna = "Ovo je novodobijena recenica".concat(" ", izmena);
    return konacna;
  } else {
    const recenica2 = recenica.concat(
      recenica.length,
      " ",
      "nedovoljno za dalje ispitivanje."
    );
    return recenica2;
  }
};

console.log(mojaFunkcija("Kraj casa"));
console.log(mojaFunkcija("Kraj casaaaa"));
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const domaci = function () {
  var uneta = prompt("Unesite recenicu");
  uneta = uneta.replace(/skola/gi, "fakultet");
  const velikim = uneta.toUpperCase();
  const malim = uneta.toLowerCase();
  let polaRecenice;
  if (uneta.length % 2 === 0) {
    polaRecenice = uneta.length / 2;
  } else if (uneta.length % 2 !== 0) {
    polaRecenice = Math.round(uneta.length / 2);
  }
  const prvaPol = recenica.slice(0, polaRecenice).toUpperCase();
  const drugaPol = recenica
    .substring(polaRecenice, recenica.length)
    .toLowerCase();
  const polaPola = prvaPol.concat(drugaPol);
  const prvihDeset = uneta.substr(0, 10);
  const poslednjihDeset = uneta.slice(-10);
  return uneta.concat(
    "\n",
    velikim,
    "\n",
    malim,
    "\n",
    polaPola,
    "\n",
    prvihDeset,
    "\n",
    poslednjihDeset
  );
};

console.log(domaci());

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.

const domaciiii = () => {
  const recenica = prompt("Unesite neku recenicu: ");
  let polaDuzine;
  //   if (recenica.length % 2 === 0) {
  //     polaDuzine = recenica.length / 2;
  //   } else {
  //     polaDuzine = Math.round(recenica.length / 2);
  //   }
  polaDuzine =
    recenica.length % 2 === 0
      ? recenica.length / 2
      : Math.round(recenica.length / 2);
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  const prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
  const drugaPol = recenica
    .substring(polaDuzine, recenica.length)
    .toLowerCase();
  //   const treca = prvaPol + drugaPol;
  const treca = prvaPol.concat(drugaPol);
  const cetvrta = recenica.replace(/skola/gi, "fakultet");
  const peta = recenica.substr(0, 10);
  const sesta = recenica.slice(-10);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};

// Izostavljajuci drugi argument kod slice() metode se uzima isecak do kraja stringa.
// const isecak = "Recenica za primenu slice metode jednim argumentom.".slice(12);
// console.log(isecak);
console.log(domaci());

var getMax = function (str) {
  var max = 0,
    maxChar = "";
  str.split("").forEach(function (char) {
    if (str.split(char).length > max) {
      max = str.split(char).length;
      maxChar = char;
    }
  });
  return maxChar;
};

console.log(getMax("radil funkcijaaaaaa"));

function ponavljanjeKaraktera(string, brojPonavljanja) {
  //   console.log(ponavljanjeKaraktera("abcddef", 2)) // [d]
  //   console.log(ponavljanjeKaraktera("tfghhhplffzaaa", 3)) // [h, a]
  var brojPonavljanja = 0,
    maxChar = "";
  string.split("").forEach(function (char) {
    if (string.split(char).length > brojPonavljanja) {
      brojPonavljanja = string.split(char).length;
      maxChar = char;
    }
  });
  return `${brojPonavljanja} karaktera imaju slova ${maxChar}`;
}

console.log(ponavljanjeKaraktera("testiranje zzzzzzzzzzzzzadate funkcije"));

function stepenovanje(broj, n) {
  let mnozenje = 1;
  for (var i = 0; i < n; i++) {
    mnozenje *= broj;
  }
  return mnozenje;
}

console.log(stepenovanje(2, 8));
