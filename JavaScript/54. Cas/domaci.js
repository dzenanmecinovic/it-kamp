// Domaci:
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

// Napraviti funkciju koja sadrzi Promise koji proverava da li poslati argument funkcije ima vise od 10 samoglasnika.
// Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecanje sa porukom "String zadovoljava uslov";
// ako argument ima manje od 11 samoglasnika neka se reject_a obecanje uz poruku "String ne zadovoljava uslov";
// U svakom slucaju neka stoji poruka "Funkcija je uspesno izvrsena".

const zadatak1 = new Promise((resolve, reject) => {
  const dzeno = {
    name: "Dzenan",
    age: 18,
  };
  if (dzeno.age > 17) resolve(`Vi ste punoletni`);
  else reject(dzeno.age);
})
  .then((punoletna) => console.log(punoletna))
  .catch((age) => console.log(age));

function zadatak2(str) {
  let strMali = str.toLowerCase();
  let samoglasnici = "";
  for (let i = 0; i < strMali.length; i++) {
    if (
      strMali[i] == "a" ||
      strMali[i] == "e" ||
      strMali[i] == "i" ||
      strMali[i] == "o" ||
      strMali[i] == "u"
    )
      samoglasnici += strMali[i];
  }
  const obecanje = new Promise((resolve, reject) => {
    if (samoglasnici.length > 10) resolve(`String zadovoljava uslov`);
    else reject(`String ne zadovoljava uslov`);
  })
    .then((uspesno) => console.log(uspesno))
    .catch((neuspesno) => console.log(neuspesno))
    .finally(() => console.log(`Funkcija je uspesno izvrsena.`));
}

zadatak2("ovo je ovo je");
//
