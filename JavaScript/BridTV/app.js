const lista = document.querySelector(".card");

async function podaci() {
  let bodi = document.querySelector("body");
  const dohvatanje = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  const data = await dohvatanje.json();
  const klipovi = data.Video;
  console.log(klipovi);
  let time = function (vreme) {
    let sekunde, minuti, sati;
    if (vreme < 60) {
      return `00:00:${vreme < 10 ? `0${vreme}` : `${vreme}`}`;
    } else if (vreme > 60 && vreme < 3600) {
      minuti = Math.floor(vreme / 60);
      sekunde = Math.floor(vreme / 60) * 60;
      return `00:${minuti < 10 ? `0${minuti}` : `${minuti}`}:${
        sekunde < 10 ? `0${sekunde}` : `${sekunde}`
      }`;
    } else if (vreme > 3600) {
      // 5500
      sati = Math.floor(trajanje / 3600);
      minuti = Math.floor(trajanje / 60) - Math.floor(trajanje / 3600) * 3600;
      sekunde = trajanje - Math.floor(trajanje / 60) * 60;
      return `${sati < 10 ? `0${sati}` : `${sati}`}:${
        minuti < 10 ? `0${minuti}` : `${minuti}`
      }:${sekunde < 10 ? `0:${sekunde}` : `${sekunde}`}`;
    }
  };

  //   bodi.innerHTML += `<video src="${
  //     klipovi[Math.floor(Math.random() * 25)].source.hd
  //   }" controls alt="">`;

  klipovi.forEach((element) => {
    lista.innerHTML += `<li>
    <div class="card">
      <img
        class="slika"
        src=${element.thumbnail}
        alt=""
      />
        <div class="tekst">
          <p class="imeVidea">${element.name}</p>
          <p class="duzinaVidea">${time(element.duration)}</p>
        </div>
    </div>
  </li>`;
  });
}

podaci();
