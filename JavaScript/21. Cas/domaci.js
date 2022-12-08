// Proveriti da li je uneti string palindrom.
function palindrom(recenica) {
    var palindrom = recenica.split("").reverse().join("")
    if(palindrom === recenica) {
        return true;
        // return `Uneti string je palindrom.`
    } else {
        return false;
        // return `Uneti string nije palindrom.`
    }
}

console.log(palindrom("radar"))
console.log(palindrom("radarss"))


function obrnutiRedosled(recenica) {
    return recenica.split("").reverse().join("")
}

console.log(obrnutiRedosled("dzenan dzenan"))
console.log(obrnutiRedosled("obrnuti redosled"))