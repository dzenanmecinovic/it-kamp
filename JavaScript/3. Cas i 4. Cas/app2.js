// OPERATORI U JAVASCRIPTU //
// Podelicemo operatore u 6 grupa:

// 1. Aritmeticki operatori (Aritmetic operators);
// 2. Operatori dodele vredonsti (Assignments operators);
// 3. String operatori (String operators);
// 4. Operatori poredjenja (Comparison operators);
// 5. Logicki operator (Logical operator);
// 6. Tip operatori (Type operators).

// 1. Aritmeticki operatori (Aritmetic operators);
// 1.1. + operator sabiranja;
console.log(4 + 5);
// 1.2. - operator oduzimanja;
console.log(4 - 5);
// 1.3. * operator mnozenja;
console.log(4 * 5);
// 1.4. / operator deljenja;
console.log(20 / 5);
// 1.5. ** operator stepenovanja;
console.log(2 ** 3);
// 1.6. % operator Modulo (ostatak pri deljenju dva broja) ;
console.log(11 % 3); // 2
console.log(12 % 3); // 0

// Uslov za parnost:
// i % 2 = 0

// Uslov za neparnost:
// i % 2 = 1
// i % 2 != 0 - me

// 1.7. ++ Increment (Povecava vrednost za 1)
let x = 5;
// postfiksni operator
x++ // x = x + 1
console.log(x)

let y = 11;
++y
// prefiksni operator
console.log(y)

// 1.8. -- Decrement (Smanjuje vrednost za 1)
let z = 99;
// postfiksni operator
z-- // z = z - 1
console.log(z)

let w = 65;
// prefiksni operator
console.log(--w);

// 2. Operatori dodele vrednosti (Assignment operators)

// 2.1. = operator dodeljivanje vrednosti nekoj promenljivoj

// 2.2. += operator 

w += 5 // w = w + 5
console.log(w);

// 2.3. -= operator oduzimanje vrednosti nekoj promenljivoj

z -= 3
console.log(z)

// 2.4. *= operator mnozenje odredjene vrednosti na postojecu promenljivu

z *= 2
console.log(z)

// 2.5. /= operator deljenje odredjene vrednosti na postojecu promenljivu

z /= 5
console.log(z)

// 2.6. %= operator modul odredjene vrednosti na postojecu promenljivu

// x=6
x %= 2
console.log(x)

// 2.7. **= operator stepenovanja odredjene vrednosti na postojecu promenljivu

y **= 2
console.log(y)

// 3. String operatori (string operators)

// Jedan od nacina za spajanje stringova je koriscenjem + operatora

let prviDeo = "Danas je Omar"
let drugiDeo = "doneo pizzu"
console.log(prviDeo + " " + drugiDeo)
console.log(Boolean(prviDeo + " " + drugiDeo))

// Neki slucajevi kod sabiranja:
console.log("Omar" + 3) // rezultat spajanja stringa i broja JE UVEK STRING
console.log(3 + "Omar")
console.log(typeof (3 + "Omar"))
// Bez obzira sto 2 moze biti pretvorena u korektan broj, nece se izvrsiti sabiranje
console.log(3 + "2")
// JavaScript ce pokusati da prevede string u broj i da izvrsi racunsku operaciju
console.log(4 - "2") // 2
console.log(4 * "2") // 8
console.log("3" / 1) // 3
console.log(2 ** "3") // 8
// Ako JavaScript ne uspe da prevede string u broj, rezultat ce biti Not a Number
console.log(21 / "7dana") // NaN (Not a Number) je vrednost za nekorektan broj

// 4. Operatori poredjenja (Comparison operators)

// 4.1. == operator poredjenja vrednosti

let a = 5
let b = 7
let c = a

console.log(a == c)
console.log(a == b)

c += 2
console.log(c) // ima novu vrednost: 7
console.log(a) // ostaje na staru vrednost: 5

// 4.2. === operator proverava jednakost tipa i jednakost vrednosti

let d = "5"
console.log(a == d)
console.log(a === d) // pritom proverava i tip

// 4.3. != operator proverava razlicitost vrednosti

console.log(b != c)

// 4.4. !== operator ispituje da li je razlicita vrednost ILI razlicit tip

console.log(a !== d)

// 4.5. > operator da li je prva vrednost veca od druge

console.log(b > c)

// 4.6. < operator da li je prva vrednost manja od druge

console.log(b < c)

// 4.7. >= operator da li je prva vrednost veca ili jednaka drugoj

console.log(9>=9)

// 4.8. <= operator da li je prva vrednost manja ili jednaka drugoj

console.log(9 <= 13)

// 4.9. ? ternarni operator

// uslov ? (radnja koja se izvrsava ako je uslov zadovoljen)
//  : 
//  (radnja koja se izvrsava ako uslov nije zadovoljen)

let isSunny = false

isSunny ? console.log("Vreme je suncano" + "Ponesite naocare!") : console.log("Vreme je kisovito." + "Ponesite kisobrane!")

// 5. Logicki operatori (Logicki operatori)

// 5.1. && - and  zahteva zadovoljavanje svih uslova

let prom1 = 4;
let prom2 = 19;
let prom3 = -3;

prom1 > 0 && prom2 > 0 && prom3 > 0 ? console.log("Sve tri promenljive su pozitivni brojevi") : console.log("Nisu sve tri promenljive pozitivni brojevi")

// 5.2. || - or zahteva zadovoljavanje bar jednog od ponudjenih uslova

prom1 > 0 || prom2 > 0 || prom3 > 0 ?
console.log("Nasli smo bar jednu pozitivnu promenljivu") : console.log("Sve promenljive su manje ili jednake nuli")

// 5.3. ! - not okrece vrednost => iz true u false i obrnuto

console.log(!Boolean(prviDeo + " " + drugiDeo))


// 6. Tip operatori (Type operators)

// 6.1. typeof se koristi za ispitivanje tipa odredjene promenljive.

isSunny = false
console.log(typeof isSunny)

// 6.2. instanceof za proveru da li je neka promenljiva instanca objekat

const obj = {
    ime: "Omar",
    prezime: "Semsovic",
}

console.log(obj instanceof Object);
console.log(obj instanceof Number);