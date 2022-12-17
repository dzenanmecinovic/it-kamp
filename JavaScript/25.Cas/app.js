// Domaci zadatak:
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752 3 4 5 6
// 5247 5 6 3 4

function domaci(broj) {
    const duzina = broj.toString().length;
    let inputString = broj.toString();
    let odvojeni = inputString.split("")
    let konacni = odvojeni[2].concat(odvojeni[3], odvojeni[0], odvojeni[1]);
    if(duzina !== 4) {
        return `Uneti string mora biti cetvorocifren`
    } else {
        // return zamenjeni;
        return konacni;
    }
}

console.log(domaci(3456))