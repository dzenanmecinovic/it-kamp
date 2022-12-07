// Napraviti novu recenicu koja ce imati isti tekst, ali bez razmaka.
// function razmaci() {
// let recenica = prompt("Unesite neku recenicu:")
// const duzina = recenica.length;
// let recenica2 = "";
// for(let i = 0; i < duzina; i++) {
//     if(recenica[i] !== " ") {
//         recenica2 += recenica[i];
//     }
// }
// console.log(recenica2)

// let counter = 0;

// for(i = 0; i < recenica.length; i++) {
//     if(recenica[i] == " ")
//     counter++;
// }
// console.log("Ova recenica ima" + " " + counter + " " + "razmaka");
// }


// Napraviti novu Funkciju koja ce datu recenicu vratiti bez razmaka i izbrojati broj razmaka u unetoj recenici.

// function razmak() {
// const recenica = prompt("Unesite neku recenicu")
// let recenica2 = ""
// let duzina = recenica.length
// for(let i = 0; i < duzina; i++) {
//     if(recenica[i] !== " ") {
//         recenica2 += recenica[i]
//     }
// }
// console.log(`Recenica glasi ${recenica2}`)
// // brojac
// let counter = 0;
// for(i = 0; i < duzina; i++) {
//     if(recenica[i] == " ") {
//         counter++
//     }
// }
// console.log (`Broj razmaka u recenici je ${counter}.`)
// }

// razmak();
const recenica2 = "Danas su pocela cetvrtfinala svetskog prvenstva u fudbalu, danas je takodje bila dodela sertifikata."
const matchingDanas = recenica2.match("danas")
const matchingDanas2 = recenica2.match(/danas/ig)
console.log(matchingDanas)
console.log(matchingDanas2)