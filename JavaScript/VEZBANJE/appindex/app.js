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

        const array1 = ['a', 'b', 'c'];
        array1.forEach(element => console.log(element));
        // console.log(array1)