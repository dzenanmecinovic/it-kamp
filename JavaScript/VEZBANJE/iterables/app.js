/* Da bismo ucinili "range" iterable, moramo da primenimo metodu na objekat zvanu
    Symbol.iterator (specijalna built-in metoda za ovakve stvari)
*/

let range = {
  from: 1,
  to: 5,
};

range[Symbol.iterator] = function () {
  return {
    current: this.from,
    last: this.to,

    // next() is called on each iteration by the for..of loop
    next() {
      // it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

for (let num of range) {
  console.log(num);
}
