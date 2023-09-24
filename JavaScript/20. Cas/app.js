// 3. Prebrojati koliko ima malih slova u unetom stringu. Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

// function kolikoMalih(recenica) {
//     let counter = 0;
//     for(i = 0; i < recenica.length; i++) {
//     if(recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " "){
//         counter++
//     } else {
//         continue;
//     }
// }
//     return `Broj malih slova u unetom stringu je ${counter}.`
// }

// console.log(kolikoMalih("Uneti string string"));

// 4. Ispitati da li u unetom stringu ima vise malih ili velikih slova.
// Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

function viseSlova(recenica) {
  let mala = 0;
  let velika = 0;
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
      mala++;
    } else if (
      recenica[i] === recenica[i].toUpperCase() &&
      recenica[i] !== " "
    ) {
      velika++;
    }
  }
  return mala > velika
    ? "U stringu je vise malih slova."
    : "U stringu je vise velikih slova.";
  // if (mala > velika) {
  //   return "U stringu je vise malih slova.";
  // } else if (velika > mala) {
  //   return "U stringu je vise velikih slova.";
  // }
}

console.log(viseSlova("VISESLOVASLOVA deset deset"));

// Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

function velikaUMala(recenica) {
  const duzina = recenica.length;
  let novi = "";
  for (i = 0; i < duzina; i++) {
    if (recenica[i].toUpperCase()) {
      novi += recenica[i].toLowerCase();
    }
  }
  return novi;
}

const velikaMala = (recenica) => recenica.toLowerCase();

console.log(velikaUMala("VELIKA SLOVA U RECENICI"));
console.log(velikaMala("VELIKA SLOVA U RECENICI"));

// Pronaci poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

const poslednjiRazmak = (recenica) => recenica.lastIndexOf(" ");
console.log(poslednjiRazmak("Prvi razmak drugi"));

// Ispisati duzinu prve reci unetog stringa. Npr za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodece razmake.

function duzinaPrveReci(recenica) {
  let prviRazmak = recenica.indexOf(" ");
  return `Duzina prve reci je ${prviRazmak}.`;
}

const duzina = (m) => `Duzina prve reci je ${m.indexOf(" ")}`;

console.log(duzinaPrveReci("Prvaaaa rec je prva."));

// Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N = 6, dobija se 'Pera i'. Ako je N vece od duzine stringa, kao rezultat se dobija ceo string.

function brojZnakova(recenica, n) {
  if (n > recenica.length) {
    return recenica;
  } else {
    return recenica.substr(0, n);
  }
}

const leftChars = (sen, len) => (len > sen.length ? sen : sen.substr(0, len));
console.log(leftChars("Pera ima devojku", 6));

console.log(`Trazeni karakteri su: ${brojZnakova("broj prvih", 1)}`);

// Za Domaci:
// Proveriti da li je uneti string palindrom (potpuno je isti kada se cita otpozadi).

function isPalindrome(str) {
  let noSpace = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      noSpace += str[i];
    } else {
      continue;
    }
  }
  let reversed = noSpace.split("").reverse().join("");
  if (noSpace.toLowerCase() === reversed.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("Ana voli milovana"));
