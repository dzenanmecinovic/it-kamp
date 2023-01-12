// Write a JS program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468

const addSomething = (num) => {
  let newNum = "";
  for (let i = 0; i <= num.length - 1; i++) {
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      newNum += num[i] + "-";
    } else {
      newNum += num[i];
    }
  }
  return newNum;
};

console.log(addSomething("025468"));
