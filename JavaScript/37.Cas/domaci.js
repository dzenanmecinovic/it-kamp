// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.
// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.
// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :
const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//////////////////////////////////////// prvi ////////////////////////////////////////
function sumaParnih(arr) {
  const suma = arr
    .filter(function (element) {
      return element % 2 === 0;
    })
    .reduce((prvi, drugi) => prvi + drugi);
  return suma;
}
console.log(sumaParnih([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//////////////////////////////////////// drugi ////////////////////////////////////////
function sum(arr) {
  const parni = [];
  for (i of arr) {
    if (i % 2 === 0) {
      parni.push(i);
    }
  }
  const suma = parni
    .map((element) => element * element)
    .reduce((prvi, drugi) => prvi + drugi);
  return `parni su [${parni}] a njihova suma kada se pomnoze samim sobom je ${suma}.`;
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//////////////////////////////////////// treci ////////////////////////////////////////
function brojPonavljanja(arr1) {
  let element;
  let brojPojavljivanja = 1;
  let brojac = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = i; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        brojac++;
        if (brojPojavljivanja < brojac) {
          brojPojavljivanja = brojac;
          element = arr1[i];
        }
      }
    }
    brojac = 0;
  }
  return `${element} se pojavljuje ${brojPojavljivanja} puta.`;
}
console.log(brojPonavljanja([1, 2, 3, 4, 5, 6, 2, 2]));
//////////////////////////////////////// cetvrti ////////////////////////////////////////
function caseSwap(input) {
  let ispis = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      ispis += input[i].toLowerCase();
    } else if (input[i] === input[i].toLowerCase()) {
      ispis += input[i].toUpperCase();
    }
  }
  return ispis;
}
console.log(caseSwap("The Quick Brown Fox"));
