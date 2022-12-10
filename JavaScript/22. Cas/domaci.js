// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku i N=5, dobija se 'vojku'.

function poslednjihN(recenica, n) {
    let poslednjiKarakteri = recenica.slice(-n)
    return poslednjiKarakteri;
}

console.log(poslednjihN("Pera ima devojku", 5))



let testing = "Recenica za testiranje"
let testing2 = testing.slice(-10)
console.log(testing2);