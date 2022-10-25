alert("Dobrodošli. Kviz počinje nakon pritiska na dugme OK. \nRešenja će biti ispisana u polju Console.")

let ime = prompt("U polju ispod unesite Vaše ime")
if (ime) {
    console.log("Uneli ste Vaše ime.")
}

const parnaMasina = +prompt("Koje godine je napravljena prva parna mašina?")

switch (parnaMasina) {
    case 1776:
        console.log("Vaš odgovor je tačan.")
        break;
    default:
        console.log("Vaš odgovor je netačan.")
}

const telefon = +prompt("Koje godine je izmišljen prvi telefon?")

switch (telefon) {
    case 1876:
        console.log("Vaš odgovor je tačan.")
        break;
    default:
        console.log("Vaš odgovor je netačan.")
}

const racunar = +prompt("Koje godine je napravljen prvi računar?")

switch (racunar) {
    case 1946:
        console.log("Vaš odgovor je tačan.")
        break;
    default:
        console.log("Vaš odgovor je netačan.")
}

const tesla = prompt("Ko je izmislio struju?")

switch (tesla) {
    case "tesla":
        console.log("Vaš odgovor je tačan.")
        break;
        case "Tesla":
            console.log("Vaš odgovor je tačan.")
            break;
            case "TEsla":
                console.log("Vaš odgovor je tačan.")
                break;
                case "TESla":
                    console.log("Vaš odgovor je tačan.")
                    break;
                    case "TESLa":
                        console.log("Vaš odgovor je tačan.")
                        break;
                        case "TESLA":
                            console.log("Vaš odgovor je tačan.")
                            break;
    default:
        console.log("Vaš odgovor je netačan.")
}