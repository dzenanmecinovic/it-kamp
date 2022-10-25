// Kondicionali //

// if (uslov1) {
    // kod za izvrsavanje u slucaju ispunjenja prvog uslova
// } else if {
    // kod za izvrsavanje u slucaju ispunjenja drugog
// } 
// else {
    // kod za izvrsavanje u slucaju NEzadovoljavanja svih prethodnih uslova
// }

// const godine = Number(prompt("Unesite broj godina"))

// Ako je broj godina unet od strane korisnika >= 18,
// neka se ispise poruka: "Punoletni ste",
// u suprotnom "Maloletni ste".

// if (godine >= 18) {
    // console.log("Punoletni ste")
// } else if (godine < 18 && godine > 0) {
    // console.log("Maloletni ste")
// } else if (godine < 0) {
    // console.log("Broj godina ne moze biti negativan")
// }
// else {
    // console.log("Niste uneli broj godina")
// }

// Na osnovu unetih godina ispisati sledece:
// Ako je broj godina manji od 12: Vi ste decijeg doba
// Ako je broj godina izmedju 12(ukljucuje) i 18(ne ukljucuje): Vi ste maloletni
// Ako je broj godina izmedju 18(ukljucuje) i 40(ne ukljucuje): Vi ste punoletni
//  Ako je broj godina veci ili jednak 40: Vi ste zrela osoba
// Ako korisnik nije uneo broj: Niste uneli broj godina.



// if (godine < 0) {
//     console.log("Broj godina ne moze biti negativan")
// } else if (godine < 12) {
//     console.log("Vi ste decijeg doba")
// } else if (godine >= 12 && godine < 18) {
//     console.log("Vi ste maloletni")
// } else if (godine >=18 && godine < 40) {
//     console.log("Vi ste punoletni")
// } else if (godine >= 40 && godine < 120) {
//     console.log("Vi ste zrela osoba")
// } else if (godine >= 120) {
//     console.log("Broj godina ne moze biti preko 120")
// } else {
//     console.log("Niste uneli broj godina")
// }

// Switch naredba
// Sintaksa:
// switch (izraz) {
//     case x:
//         // Blok koda koji se izvrsava u slucaju da je izraz = x
//         break;
//         // break se ne sme izostaviti jer bi se izvrsio kod narednog slucaja, sto svakako nije nesto sto zelimo da se desi.
//     case y:
//         // Blok koda koji ce da se izvrsava u slucaju da je izraz = y
//         break;
//     case z:
//         // Blok koda koji ce da se izvrsava u slucjau da je izraz = z
//         break;
//     default:
//         // Blok koji ce da se izvrsava u slucaju da izraz nije jednak ni x, ni y, ni z.
// }

const broj = +prompt("Unesite broj izmedju 12 i 15:");

switch (broj) {
    case 12:
        console.log("Korisnik je uneo broj 12")
        break;
    case 13:
        console.log("Korisnik je uneo broj 13")
        break;
    case 14:
        console.log("Korisnik je uneo broj 14")
        break;
    case 15:
        console.log("Korisnik je uneo 15")
        break;
    default:
        console.log("Korisnik nije uneo trazeni broj")
}

// 1. Zadatak:
// Napisati program na osnovu dva uneta od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti borjevi razliciti.

// 2. Zadatak:
// Korisnik unosi dva realna broja xi y. Napisati program koji izracunava i stampa
// Kolicnik x/y, ako je broj y ralizcit od nule,
// a inace ispisuje poruku: Deljenje nemoguce.