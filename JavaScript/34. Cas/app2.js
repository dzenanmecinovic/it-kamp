// JavaScript Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza.

// forEach() metoda poziva callback funkciju za svaki element niza.

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

// forEach() moze imati 3 parametra:
// 1. element niza
// 2. index niza
// 3. ceo niz
niz.forEach((element) => {
  console.log(element);
});

niz.forEach((element, index) => {
  console.log(`${element} se nalazi na ${index + 1}. mestu u nizu.`);
});

niz.forEach((element, index, arr) => {
  console.log(
    `${element} se nalazi na ${index + 1}. mestu u nizu. Ceo niz je ${niz}`
  );
});

// Ne moramo koristiti nazive od pre.
niz.forEach((student, pozicija) => {
  console.log(`${student} se nalazi na ${pozicija + 1}. mestu u nizu.`);
});

// map() metoda kreira novi niz (iste duzine) sa logikom predstavljenom unutar callback funkcije unutar date metode.

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog niza.

let noviNiz = [];
for (let i of niz) {
  noviNiz.push(i);
}
console.log(noviNiz);

let noviNiz2 = [];
noviNiz2 = noviNiz.map((element) => element);
console.log(noviNiz2);

const niz3 = niz.map(function (student) {
  return student;
});

console.log(niz3);

// Preko map() metode napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom.

const niz4 = niz.map(
  (student) => student.charAt(0).toUpperCase() + student.slice(1)
);
console.log(niz4);

// Domaci:
// Nap
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.
// Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza
// Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza
// const brojevi = [-5, 4, 3, 10, 14, -5]; (4.)
