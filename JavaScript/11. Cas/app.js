// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.

let recenica = "Omare jesi li spremio test?";
const duzina = recenica.length;
let recenica2 = "";
for (let i = 0; i < duzina; i++) {
  if (recenica[i] !== " ") {
    recenica2 += recenica[i];
  }
}
console.log(recenica2);

let counter = 0;

for (i = 0; i < recenica.length; i++) {
  if (recenica[i] == " ") counter++;
}
console.log("Ova recenica ima" + " " + counter + " " + "razmaka");

// Napraviti novu recenicu gde ce uesto slova "a" pisati "t". Dok ako se posle slova "a" nalazi slovo "n" pisace "d" umesto "a".

const recenica3 = prompt("Unesite neku recenicu:");
let novaRecenica = "";
for (i = 0; i < recenica3.length; i++) {
  if (recenica3[i] === "a" && recenica3[i + 1] === "n") {
    novaRecenica += "d";
  } else if (recenica3[i] === "a") {
    novaRecenica += "t";
  } else {
    novaRecenica += recenica3[i];
  }
}
console.log(novaRecenica);
