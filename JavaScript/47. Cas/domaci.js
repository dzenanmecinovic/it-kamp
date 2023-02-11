// Domaci:
// 1. Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89
function prvi(niz, broj) {
  const largest = niz.sort((a, b) => b - a);
  return largest[broj - 1];
}
console.log(prvi([43, 56, 90, 89, 88, 23, 99, 652], 4));

// 2. Write a JavaScript function to filter false, null, 0 and blank values from an array. Go to the editor
// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

const niz = [58, "", "abcd", true, null, false, 0];

const drugi = (niz) => {
  const novi = [];
  niz.filter((element) => {
    if (element) novi.push(element);
  });
  return novi;
};
console.log(drugi(niz));

// 3. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.
const testObjekat = {
  ime: "dzenan",
  prezime: "mecinovic",
};
function treci(objekat) {
  let rezultat = {};
  let keys = Object.keys(objekat);
  for (let i = 0; i < keys.length; i++) {
    rezultat[objekat[keys[i]]] = keys[i];
  }
  return rezultat;
}
console.log(treci(testObjekat));
// 4. Write a JavaScript program to get the length of a JavaScript object. Go to the editor
// Sample object :
const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const cetvrti = (object) => {
  const zadatak4 = [];
  zadatak4.push(Object.keys(object));
  return `Duzina objekta je ${zadatak4.flat().length}.`;
};
console.log(cetvrti(student));

const cetvrti2 = (obj) => {
  return `Duzina objekta je ${Object.keys(obj).length}.`;
};
console.log(cetvrti2(student));
