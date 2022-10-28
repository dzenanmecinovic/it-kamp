// Ispisati prvih deset brojeva u konzoli, jedan ispod drugog.
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);
// console.log(11);

// Petlja (LOOP) predstavlja nacin da se neki kod izvrsi (uz odredjene uslove) vise puta.

// for petlja - Sintaksa:

// for (statement1; statement2; statement3) {
    // kod za izvrsavanje u svakoj iteraciji
// }

// statement1 predstavlja definisanje promenljive koja ce da predstavlja iterator
// statement2 predstavlja uslov (granicu) do koje vrednosti ce iterator da ide
// statement3 predstavlja povecanje ili smanjenje koje se desi na kraju svake iteracije

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// I Nacin
// for (let i = 1; i < 11; i++) {
//     if (i !== 2 && i !== 5) {
//         console.log(i)
//     }
// }


// continue keyword (rezervisana rec) ako se nadje u nekoj iteraciji, zapravo oznacava
// da se ta iteracija zanemari i da se nastavi dalje sa sledecom.

// II Nacin

// for (let i = 1; i < 11; i++) {
//     if (i === 2 || i === 5) {
//         continue;
//     } else {
//         console.log(i)
//     }
// }

// break keyword (rezervisana rec) predstavlja da od tog trenutka for petlja prestaje sa radom.

// ispisati sve brojeve od 1 do 10. ako je neki broj deljiv sa 7 neka se prekine petlja.

// for (let i = 1; i < 11; i++) {
//     if (i % 7 === 0) {
//         break;
//     } else {
//         console.log(i)
//     }
// }

// Ispisati parne brojeve od 1 do 20 na dva nacina.

// I nacin

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 1) {
//         continue;
//     } else {
//         console.log(i)
//     }
// }

// II nacin

// for (let broj = 2; broj <= 20; broj += 2) {
//     console.log(broj)
// }

// Domaci
// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5.
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.



for (let i = 50; i <= 100; i += 5) {
    // if (i % 5 === 1 && i % 2 === 1 ) {
    //     continue;
    // }
    console.log(i)
}