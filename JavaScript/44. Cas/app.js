const niz = [4, 5, 5, 6, 4, 9, -1, 5];

// Klonirati niz.

// const niz2 = [];

// for (let i of niz) {
//   niz2.push(i);
// }

// console.log(niz2);

//root
// const niz3 = niz.map((element) => element);
// console.log(niz3);

// spread operator (...)
// Pomocu njega kloniramo niz ili objekat.

// const niz3 = [...niz];
// console.log(niz3);

const obj = {
  firstName: "Haris",
  lastName: "Muslic",
  status: "samo liverpul",
  age: 19,
};

const obj2 = { ...obj, status: false, age: obj.age + 1 };
console.log(obj2);
