// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

// const n = +prompt("Unesite neki prirodan broj:")
// let brojac = 0;
// let suma = 0;
// for (let broj = 1; broj <= n; broj++) {
//     if(broj % 5 === 0) {
//         brojac++;
//         suma += broj;
//     }
// }
// console.log("Ukupno ima" + " " + brojac + " brojeva koji su deljivi sa 5, \na njihova suma je:" + suma + ".")

// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir brojeva deljivog sa 4 i broja 14.

// for(let i = 99; i >= -99; i--) {
//     if(i % 4 === 0) {
//         console.log(i + 14)
//     }
// }
// console.log(i + 14)

// let iterator = 99
// while (iterator > -100) {
//     if(iterator % 4 === 0) {
//         console.log(iterator + 14);
//     }
//     iterator--
// }

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

let brojac = 0;
let suma = 0;

for(let i = 3; i <= 17; i++) {
    if(i % 3 === 0) {
        brojac++
        suma += i;
    }
}
console.log(suma / brojac)


// let number = 3
// let counter = 0
// let sum = 0
// while(number < 18) {
//     if(number % 3 === 0) {
//     counter++;
//     sum += number;
//     }
//     number++;
// }
// console.log("Aritmeticka sredina deljivih brojeva sa 3, iz intervala [3, 17] je" + " " + sum/counter);