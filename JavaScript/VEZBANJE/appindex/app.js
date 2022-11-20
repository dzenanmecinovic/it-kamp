// objekat1 = new Object({
//     ime: " Dzenan ",
//     prezime: " Mecinovic "
// })

// console.log(objekat1)
// // console.log(typeof objekat2)

// objekat2 = new Object({
//     ime: " Test ",
//     prezime: " Objekt "
// })

// console.log(objekat2)

// console.log(objekat1, objekat2)

// niz1 = [objekat1, objekat2]

// console.log(niz1)
// console.log(typeof niz1)

// array = ["Array", 5, true, BigInt(250000000)]
// console.log(array)

// console.log(typeof array)
// upozorenje = ["Dzenan Mecinovic"]


// alert(array);
// alert(upozorenje);

// let broj = +prompt("Unesite PARAN broj da izracunate kvadrate brojeva od 1 do unetog broja:")
// let iterator = 1;
// while(iterator <= broj) {
//     if (broj % 2 === 1) {
//         console.log("Broj mora biti paran")
//         break;
//     } 
//     console.log(iterator**2)
//     iterator++
// }

// for(i = 1; i <= broj; i++) {
//     if (broj % 2 === 1) {
//         console.log("Broj mora biti paran.")
//         continue;
//     } else if (isNaN(broj)) {
//         console.log("Broj mora imati korektne vrednosti.")
//         break;
//     }
//     console.log(i**2)
// }

// if (isNaN(broj)) {
//     console.log("Vrednost mora biti broj.")
// } else if (broj % 2 !== 1) {
//     console.log(broj * broj)
// } else if (broj % 2 == 1) {
//     console.log("Broj mora biti paran.")
// }

// for(i = 1; broj; i++) {
//     console.log(i)
// }

        // var str = new String("Demo Text");
        // document.write("Following is bigger text: "+str.big());
        // let x = +prompt("Unesite neki pozitivan broj koji je manji od 100 hiljada")
        //     if(x < 0) {
        //         document.write("Broj mora biti veci od 0, a manji od 100 hiljada")
        //     } else if(x >= 100000) {
        //         document.write("Broj mora biti manji od 100 hiljada")
        //     } else if (isNaN(x)) {
        //         document.write("Uneta vrednost mora biti broj.")
        //     } else {
        //         document.write("Uneta vrednost je" + " " + x);
        //     }

        // const array1 = ['a', 'b', 'c'];
        // array1.forEach(element => console.log(element));
        // console.log(array1)

// 1. Zadatak:
// Napisati program na osnovu dva uneta od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti borjevi razliciti.

// 2. Zadatak:
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// Kolicnik x/y, ako je broj y ralizcit od nule,
// a inace ispisuje poruku: Deljenje nemoguce.

// const x = +prompt("Unesite prvi pozitivan broj")
// const y = +prompt("Unesite drugi pozitivan broj")

// if(isNaN(x) || isNaN(y)) {
//         console.log("Unete vrednosti moraju biti brojevi.")
// } else if(x < 0 || y < 0) {
//         console.log("Brojevi moraju biti pozitivni.")
// } else if(x === y) {
//         console.log("Povrsina kvadrata je " + x * y + " " + "kvadratnih metara.")
// } else {
//         console.log("Povrsina pravougaonika je" + " " + x * y + " " + "kvadratnih metara.")
// }

// const x = +prompt("Unesite prvi(x) broj")
// const y = +prompt("Unesite drugi(y) broj")

// if(isNaN(x) || isNaN(y)) {
//         console.log("Unete vrednosti moraju biti brojevi.")
// } else if(y === 0) {
//         console.log("Deljenje nemoguce.")
// } else {
//         console.log("Kolicnik je " + x/y);
// }