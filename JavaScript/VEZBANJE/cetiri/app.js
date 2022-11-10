// no spaces sentence

let recenica = "Koji je danas dan i koliko je trenutno sati?"
const duzina = recenica.length;
let novaRecenica = ""

for(i = 0; i < duzina; i++) {
    if(recenica[i] !== " ") {
        novaRecenica += recenica[i];
    }
}
console.log(novaRecenica)