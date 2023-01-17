const DATA1 = [2, 26, 38, 75, 11, 29];
const DATA2 = ["a", "b", "c", "d", "e"];
const task = (arr1, arr2) => {
  const pomocni = arr1.concat(arr2);
  const pomocni2 = [];
  for (let br of pomocni) {
    if (br % 2 === 0) {
      pomocni2.push(br);
    }
  }
  pomocni2.unshift(10, 20);
  return [pomocni, pomocni2];
};

console.log(task(DATA1, DATA2));
