// 1.  Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu. Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'. Ako string ima neparan broj znakova, poslednji znak se ne dira.

// const rec = "abcdDzenoDzenoDzeno";
// let novaRec = "";
// for (let i = 0; i < rec.length; i++) {
//   if (i === 0) {
//     novaRec += rec[i + 1];
//   } else if (i === 1) {
//     novaRec += rec[i - 1];
//   } else if (i === 2) {
//     novaRec += rec[i + 1];
//   } else if (i === 3) {
//     novaRec += rec[i - 1];
//   }
// }
// console.log(novaRec);

// function menjanje(recenica) {
//   let novaRecenica = "";
//   for (let i = 0; i < recenica.length; i++) {
//     if (recenica.length % 2 !== 0 && i === recenica.length - 1) {
//       novaRecenica += recenica[i];
//     } else if (i % 2 === 0) {
//       novaRecenica += recenica[i + 1];
//     } else if (i % 2 !== 0) {
//       novaRecenica += recenica[i - 1];
//     }
//   }
//   return novaRecenica;
// }

// console.log(menjanje("123456789"));
// console.log(menjanje("12345678b"));
// console.log(menjanje("12345678c"));
// console.log(menjanje("12345678x"));

function menjanje(recenica) {
  let novaRecenica = "";
  for (let i = 0; i < recenica.length; i++) {
    if (i === recenica.length - 1) {
      novaRecenica += recenica[i];
    } else if (i % 2 === 0) {
      novaRecenica += recenica[i + 1];
    } else if (i % 2 !== 0) {
      novaRecenica += recenica[i - 1];
    }
  }
  return novaRecenica;
}

console.log(menjanje("123456789"));
console.log(menjanje("12345678b"));
console.log(menjanje("12345678c"));
console.log(menjanje("12345678x"));
console.log(menjanje("Pera ima devojku."));

// 2.  Unose se dva stringa A i B. Kreirati novi string kao kombinaciju stringova A i B, tako što se kombinuju prvi sa prvim, drugi sa drugim, treći sa trećim znakom itd. Ako je jedan string duži od drugog, na kraju samo dodati znakove viška. Npr. za stringove "PERA" i "sladoled" dobija se string "PsElRaAdoled".

const drugi = (recenica1, recenica2) => {
  const duzina1 = recenica1.length;
  const duzina2 = recenica2.length;
  //   let duzina;
  //   if (duzina1 > duzina2) {
  //     duzina = duzina1;
  //   } else {
  //     duzina = duzina2;
  //   }
  const duzina = duzina1 > duzina2 ? duzina1 : duzina2;
  let recenica3 = "";
  for (let i = 0; i < duzina; i++) {
    if (recenica1[i] !== undefined && recenica2[i] !== undefined) {
      recenica3 += recenica1[i] + recenica2[i];
    } else if (recenica1[i] === undefined) {
      recenica3 += recenica2[i];
    } else if (recenica2[i] === undefined) {
      recenica3 += recenica1[i];
    }
  }
  return recenica3.toLowerCase();
};
console.log(drugi("PERA", "sladoled"));
console.log(drugi("OVO JE SADA DUZI STRING", "sladoled"));

// 6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
// console.log(protectEmail("robin_singh@example.com"));
// "robin...@example.com"

const protectEmail = (email) => {
  let index = 0;
  let broj = 0;
  for (let i = 0; i < email.length; i++) {
    if (
      email[i] === "." ||
      email[i] === "_" ||
      email[i] === "1" ||
      email[i] === "0" ||
      email[i] === "2" ||
      email[i] === "3" ||
      email[i] === "4" ||
      email[i] === "5" ||
      email[i] === "6" ||
      email[i] === "7" ||
      email[i] === "8" ||
      email[i] === "9"
    ) {
      index = broj;
      break;
    } else if (email[i + 4] !== isNaN) {
      index = i;
    }
  }
  const indexAt = email.indexOf("@");
  const prviDeo = email.slice(0, broj);
  const drugiDeo = email.slice(indexAt);
  const noviEmail = prviDeo.concat("...", drugiDeo);
  return noviEmail;
};

console.log(protectEmail("dzenan_kosuta@hotmail.com"));
console.log(protectEmail("dzenan.mecinovic@hotmail.com"));
console.log(protectEmail("dzenan5zecic@hotmail.com"));
console.log(protectEmail("dzenanzecic@hotmail.com"));
console.log(protectEmail("dzenanzecic@hotmail.com"));

//     console.log("email@hotmail.com")

//   function zastitiEmail(email) {
//     const at = email.indexOf("@");
//     const doAt = email.slice(at);
//     const prviDeo = email.length - email.indexOf("@")
//     return prviDeo + doAt;
//   }
//   console.log(zastitiEmail("zastiti@zastiti.zassssstiti"))

function zastitaEmaila(email) {
  let split = email.split("@");
  let prviDeo = split[0];
  let drugiDeo = split[1];
  let pola = prviDeo.length / 2;
  let prvi = prviDeo.substr(0, prviDeo.length - pola);
  return prvi + "...@" + drugiDeo;
}
console.log(zastitaEmaila("mecinovicdz@gmail.com"));
