// Domaci zadatak:
// Napraviti funkciju koja ocekuje cetvorocifren broj, a vraca broj kojem su zamenjene prva i treca cifra, kao i druga i cetvrta cifra.
// 4752
// 5247

function domaci(broj) {
    const duzina = broj.toString().length;
    let inputString = broj.toString();
    let odvojeni = inputString.split("")
    let konacni = odvojeni[2].concat(odvojeni[3], odvojeni[0], odvojeni[1]);
    if(duzina !== 4) {
        return `Uneti string mora biti cetvorocifren.`
    } else {
        // return zamenjeni;
        return konacni;
    }
}

console.log(domaci(4752));

//
function menjajCifre(broj) {
    const strBroja = broj.toString();
    if(strBroja.length !== 4 || isNaN(strBroja)) {
        return `Dati argument mora biti cetvorocifren broj!`;
    } else {
        const prviDeo = strBroja.slice(0,2);
        const drugiDeo = strBroja.slice(2);
        const noviBroj = drugiDeo.concat(prviDeo);
        return +noviBroj;
    }
}

console.log(menjajCifre(4752))