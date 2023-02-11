// domaci (1.)
const nthlargst = (arr, position) => {
  arr.sort((a, b) => b - a);
  return arr[position - 1];
};
console.log(nthlargst([43, 56, 23, 89, 88, 90, 99, 652], 1));

// (2.)
const objekat = {
  name: "test",
  lastName: "testt",
};
const keysToValues = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const newObj = {};
  for (let i = 0; i <= values.length - 1; i++) {
    newObj[values[i]] = keys[i];
  }
  return newObj;
};
console.log(keysToValues(objekat));

//

function func(a, b) {
  const pomocniB = b.filter((element) => element < a.length);
  const novi = [];
  for (let i = 0; i < pomocniB.length; i++) {
    novi.push(a[pomocniB[i]]);
  }
  return novi;
}

console.log(func([42, 52, 62, 31], [3, 2, 1, 1]));

//

function func2(niz) {
  counter = 0;
  for (let i = 1; i < niz.length; i++) {
    if (niz[i] === 2 * niz[i - 1] && niz[i] + 10 === niz[i + 1]) {
      counter++;
    }
  }
  return counter;
}

console.log(func2([15, 30, 40, 25, 50, 60]));
console.log(func2([10, 20, 30, 60, 70]));
