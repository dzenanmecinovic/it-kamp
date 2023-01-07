// Domaci proveriti da li je uneti string palindrom

function isPalindrom(rec) {
  let novaRec = "";
  // Pravljenje obrnutog stringa:
  for (let i = rec.length - 1; i >= 0; i--) {
    novaRec += rec[i];
  }
  if (rec === novaRec) {
    return "Data rec jeste palindrom.";
  } else {
    return "Data rec nije palindrom.";
  }
}

console.log(isPalindrom("ana voli milovana"));
/////////////////////////////////////////////////////////
// Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reci (odvojenih razmakom) unetog stringa. Npr. A = 'Svuda podji, kuci dodji', dobija se B = 'Svuda dodji'. Podrazumeva se da uneti string nema vodece ili pratece razmake.

function prvaPoslednja(recenica) {
  const pozicijaPrvogRazmaka = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, pozicijaPrvogRazmaka);
  const pozicijaPoslednjegRazmaka = recenica.lastIndexOf(" ");
  const drugaRec = recenica.slice(pozicijaPoslednjegRazmaka);
  const recenica2 = prvaRec.concat(drugaRec);
  return recenica2;
}

console.log(prvaPoslednja("jedan dva tri"));

// Za uneti string A, treba izdvojiti podstring B, koji pocinje od unete pozicije N i ima M znakova. Npr. za string 'Pera ima devojku', N = 6 i M=7, dobija se B= 'ima dev'.

function podString(recenica, n, m) {
  let noviString = recenica.substr(n, m);
  return noviString;
}

console.log(podString("Recenica koja sadrzi nekoliko karaktera", 3, 20));

// Unosi se string A i znak Z. Kreirati novi string B koji se dobija tako sto se iz unetog stringa izbacuje svaka pojava znaka Z. Npr, za unet string "Madagaskar" i znak "a", dobijamo rezultat "Mdgskr".

function izbacivanje(recenica, z) {
  let nova = "";
  for (let i = 0; i < recenica.length; i++) {
    if (recenica[i] !== z) {
      nova += recenica[i];
    } else {
      continue;
    }
  }
  return nova;
}

console.log(izbacivanje("reacenaaicaeaeaea", "a"));

// Domaci zadatak:
// Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku i N=5, dobija se 'vojku'.
