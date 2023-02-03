//                  domaci
/* Napraviti funkciju koja ce povecati vrednost satne, dnevne i mescne karte za po 20%.
    Za bilo koji objekat koji ima propeprties: satnaKarta, dnevnaKarta i mesecnaKarta.
    Nakon toga je primeniti za automobil objekat i ispisati automobil nako ntoga.
*/

const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: [062321552, 0632323123],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (od, to) {
      const oneDay = 24 * 60 * 60 * 1000;
      const firstDate = new Date(od);
      const secondDate = new Date(to);
      console.log(firstDate);
      console.log(secondDate);

      const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
      return `Za dnevnu kartu za parking od ${od} do ${to} potrosicemo ${
        diffDays * automobil.garaza.dnevnaKarta
      }Din`;
    },
  },
};

function povecanjeVrednosti() {
  return `Satna, dnevna i mesecna karta su povecane za 20% i sada iznose ${(automobil.garaza.satnaKarta *= 1.2)}, ${(automobil.garaza.dnevnaKarta *= 1.2)} i ${(automobil.garaza.mesecnaKarta *= 1.2)}.`;
}

const povecanje = povecanjeVrednosti.bind(automobil);
console.log(automobil.garaza.satnaKarta);
console.log(automobil.garaza.dnevnaKarta);
console.log(automobil.garaza.mesecnaKarta);
console.log(povecanje());
console.log(automobil.garaza.satnaKarta);
console.log(automobil.garaza.dnevnaKarta);
console.log(automobil.garaza.mesecnaKarta);
