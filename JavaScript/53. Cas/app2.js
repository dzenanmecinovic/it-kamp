/* Promise je JavaScript objekat koji predstavlja mesto za rezultate asinhrone funkcije
sve dok traje izvrsavanje asinhrone operacije. */

// const cizburger = new Promise((resolve, reject) => {
//   const response = 200;
//   // const response = 404;
//   if (response >= 200 && response < 300) {
//     resolve();
//   } else {
//     reject();
//   }
// // });

// cizburger
//   .then(() => console.log("Dobio sam cizburger"))
//   .catch(() => console.log("Nisam dobio obrok"))
//   .finally(() => console.log("Obecanje je zavrseno"));

const cizburger2 = new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4];
  const response = 250;
  if (response >= 200 && response < 300) {
    resolve(arr);
  } else {
    reject("Rejected");
  }
});

/* chain efekat se postize tako sto vrednost koja treba biti koriscena u
narednoj callback funkciji then metode se mora naci u return prethodne callback funkcije */

cizburger2
  .then((niz) => {
    console.log(`Dobili smo ${niz}.`);
    const parni = niz.filter((br) => br % 2 === 0);
    return parni;
  })
  .then((nesto) => console.log(`Filtrirani niz je: ${nesto}.`))
  .catch((error) => console.log(error));
