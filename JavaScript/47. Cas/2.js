// 3. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

const testObjekat = {
  ime: "dzenan",
  prezime: "mecinovic",
};

const vrednosti = Object.values(testObjekat);
function treci(obj) {
  let rezultat = {};
  let keys = Object.keys(obj);
  console.log(keys);
  for (var i = 0; i < keys.length; i++) {
    rezultat[obj[keys[i]]] = keys[i];
  }
  return rezultat;
}

console.log(treci(testObjekat));
