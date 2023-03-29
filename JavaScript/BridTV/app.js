const lista = document.querySelector(".card");

let bodi = document.querySelector("body");
async function podaci() {
  const dohvatanje = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network Error");
      }
      return response.json();
    })
    .catch((error) => console.error("Fetching problem: ", error));

  const klipovi = dohvatanje.Video;
  console.log(klipovi);

  function time(vreme) {
    const hours = Math.floor(vreme / 3600);
    const minutes = Math.floor((vreme % 3600) / 60);
    const seconds = Math.floor(vreme % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  // video player
  let novi = document.createElement("video");
  novi.setAttribute("class", "plejer");
  novi.setAttribute(
    "src",
    `${klipovi[Math.floor(Math.random() * 25)].source.hd}`
  );
  novi.setAttribute("controls", "");
  bodi.append(novi);

  // bodi.innerHTML += `<video class="plejer" src="${
  //   klipovi[Math.floor(Math.random() * 25)].source.hd
  // }" controls alt="">`;

  klipovi.forEach((element) => {
    lista.innerHTML += `<li>
    <div class="card">
        <div class="content">
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
    </div>
  </li>`;
  });
}
podaci();
