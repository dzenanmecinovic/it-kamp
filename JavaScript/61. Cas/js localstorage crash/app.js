// a variable

var data = {
  name: "Dzenan",
  age: "19",
};

let dataArray = ["dzenan", 19, 23.5];

// save the data in the localstorage

localStorage.setItem("name", data.name);
localStorage.setItem("age", data.age);

localStorage.setItem("array", dataArray);

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("array"));

//
localStorage.removeItem("name");

localStorage.removeItem("array");

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("array"));

localStorage.clear();

console.log(localStorage.getItem("age"));
