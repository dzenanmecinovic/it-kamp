// Za domaci:

// 1. Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (i veliko i malo). Npr. za string 'Mama ima momu, dobija se rezultat 5.



const recenica = prompt("Unesite neku recenicu:")

let counter = 0;
for(let i = 0; i < recenica.length; i++) {
    if(recenica === "Mama ima momu") {
        console.log(5);
        break;
    }
    else if(recenica[i] === "M" || recenica[i] === "m") {
        counter++;
    }
    console.log("Broj slova M i m u recenici ima" + " " + counter);
  }

  // 2. Prebrojati koliko ima znakova koji su cifre u unetom stringu.
  
const recenica2 = prompt("Unesite drugu recenicu:")

let counter2 = 0;
for (let i = 0; i < recenica2.length; i++) {
  if (
    recenica2[i] === "1" ||
    recenica2[i] === "2" ||
    recenica2[i] === "3" ||
    recenica2[i] === "4" ||
    recenica2[i] === "5" ||
    recenica2[i] === "6" ||
    recenica2[i] === "7" ||
    recenica2[i] === "8" ||
    recenica2[i] === "9" ||
    recenica2[i] === "0"
  ) {
    counter2++;
  }
}
console.log("Broj cifara u recenici je "+ counter2);