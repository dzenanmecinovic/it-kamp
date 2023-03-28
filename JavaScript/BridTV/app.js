let videi = document.querySelector(".videi");

async function podaci() {
  const dohvatanje = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  const data = await dohvatanje.json();
  const klipovi = data.Video;
  console.log(klipovi);
  //   const potrebni = [];
  for (let i = 0; i < klipovi.length; i++) {
    if (klipovi.webp !== null) {
      return (najnoviji = {
        webp: klipovi.webp,
      });
    }
  }
  console.log(najnoviji);
}

podaci();
