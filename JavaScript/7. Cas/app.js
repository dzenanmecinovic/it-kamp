// while petlja nam omogucava iteraciju kroz neki objekat
// nekoliko puta uz potencijalno odredjene uslove.
// Kod while petlje je neophodno na kraju koda definisati povecanje iteratora.
// (kako ne bismo dobili beskonacnu petlju)

// Sintaksa:

// while (uslov) {
    // blok koda za izvrsavanje
    // definisati povecanje iteratora
// }

// Ispisati sve brojeve od 1 do 10 koji su parni

// let i = 0;
// while (i < 11) {
//     if (i % 2 === 0) {
//     console.log(i)
//     }
//     i++;
// }

// Traziti od korisnika da unese neki broj.
// Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:

// const broj = +prompt("Unesite neki pozitivan broj:")
// let iterator = 1;
// while (iterator <= broj) {
//     console.log(iterator**2);
//     iterator++
// }

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi
// od manjeg do veceg broja
// Ispisuju se brojevi od manjeg do veceg

let prviBroj = +prompt("Unesite prvi broj:")
let drugiBroj = +prompt("Unesite drugi broj:")

if(prviBroj < 0 && drugiBroj < 0) {
    console.log("Brojevi moraju biti veci od 0.")
}
let broj = prviBroj && drugiBroj

while(prviBroj < drugiBroj) {
    console.log(broj)
    broj++
}

let broj1 = +prompt("Unesite prvi broj:")
let broj2 = +prompt("Unesite drugi broj:")

if (isNaN(broj1) || isNaN(broj2)) {
    console.log("Brojevi moraju imati korektne vrednosti.")
} else if ()


// do while petlja predstavlja poseban slucaj while petlje
// gde se prvo izvrsava kod, pa tek onda proverava uslov.

// Sintaksa:

// do {
// blok koda za izvrsavanje
// } while (uslov)

// Ispisati brojeve od 1 do 5.
// let broj3 = 1;
// do {
//     console.log(broj3)
//     broj3 += 2;
// } while (broj3 <= 100);

// Nedostatak do while petlje kroz primer.
// Ispisati sve brojeve manje od 20, krenuvsi od broja koji
// unosi korisnik.

// let broj4 = Number(prompt("Unesite neki broj:"))
// do {
//     console.log(broj4)
//     broj4++
// } while (broj4 < 20)

// Domaci zadatak:
// Preko switch naredbe:
// console.log(new Date().getDay())
// getDay() - daje vrednost od 0 do 6
// switch (new Date().getDay())....
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe,
// kroz case-ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'."
// "Ugodno provedite vikend"

// switch (new Date().getDay()) {
//         case 1:
//         console.log("Danas je radni dan")
//     break;
//         case 2:
//         console.log("Danas je radni dan")
//     break;
//         case 3:
//         console.log("Danas je radni dan")
//     break;
//         case 4:
//         console.log("Danas je radni dan")
//     break;
//         case 5:
//         console.log("Danas je radni dan")
//     break;
//         case 6:
//         console.log("Danas je vikend")
//     break;
//         case 0:
//         console.log("Danas je vikend")
// }