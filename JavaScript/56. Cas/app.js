// console.dir(document);

console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = "New Title";
// console.log(document.title);

// console.log(document.body);

// console.log(document.all);
// const headerTitle = document.all[10];
// console.log(headerTitle);

// headerTitle.textContent = "new logo";
// headerTitle.innerHTML = "<h2>New Logo</h2>";

// console.log(document.forms);
// // console.log(document.images);
// let headerTitle = document.getElementById("logo");
// console.log(headerTitle);

// headerTitle.textContent = "new logo";
// headerTitle.innerHTML = "<ins>new logo</ins>";

// PROMENA STILOVA

// headerTitle.style.borderBottom = "solid 3px #000";

// GET ELEMENTS BY CLASS NAME

const containers = document.getElementsByClassName("container");
// console.log(container);
const container = containers[0];
// container.style.backgroundColor = "#ABABAB";
// container.style.border = "1px solid red";

// get elements by tag name

const listItems = document.getElementsByTagName("li");
// listItems.style.color = "yellow";  NE RADI NA TAJ NACIN VEC MORA KROZ ITERAICJU

// for (let i = 0; i < listItems.length; i++) {
//   if (i === 1) {
//     listItems[i].style.color = "brown";
//   } else {
//     listItems[i].style.color = "blue";
//   }
// }

// Query Selector

const firstLogoId = document.querySelector("#logo");
const firstCont = document.querySelector(".container");
const firstLi = document.querySelector("li");

console.log(firstLogoId);
console.log(firstCont);
console.log(firstLi);

firstLi.textContent = "first item";

const input = document.querySelector("input");
// input.value = "Hello World";

const input2 = document.querySelector("input[type='email']");
// input2.value = "Enter the email...";
// input2.placeholder = "Enter the email...";

// Query Selector All

const listItems2 = document.querySelectorAll("li");
console.log(listItems2);

const evenLi = document.querySelectorAll("li:nth-child(even)");
const oddLi = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i <= evenLi.length; i++) {
  oddLi[i].style.backgroundColor = "orange";
  //   evenLi[i].style.backgroundColor = "brown";
}

// parentNode

// const title = document.getElementById("add");
// console.log(title.parentNode);

// parentElement

// const title = document.getElementById("add");
// console.log(title.parentElement);

// childNodes (vraca sve elemente i razmake)

// const container = document.querySelector(".container");
// console.log(container.childNodes);

// children (vraca samo elemente)

// const container = document.querySelector(".container");
// console.log(container.children);

// firstElementChild

// const container = document.querySelector(".container");
// console.log(container.firstElementChild);

// lastElementChild
// nextElementSibling
// previousElementSibling

// createElement

const newDiv = document.createElement("div");

// add class

newDiv.className = "newDiv";

container.appendChild(newDiv);

// add id

newDiv.id = "newId";

const textForNewDiv = (document.createTextNode = "Hello World");

newDiv.append(textForNewDiv);

container.appendChild(newDiv);

// setAttribute uzima 2 argumenta, prvi je atribut koji zelimo da dodamo a druga je vrednost koju zelimo da dodelimo tom atributu.
input2.setAttribute("placeholder", "Unesite email adresu...");
console.log(input2.getAttribute("placeholder"));

// NASTAVAK

// EVENTS

let button = document.querySelector("button");
// button.addEventListener("click", buttonClicked);

// newDiv.addEventListener("mousemove", runEvent);

// Za input polja
newDiv.addEventListener("keydown", runEvent);
newDiv.addEventListener("keyup", runEvent);
newDiv.addEventListener("keypress", runEvent);

let inputs = document.querySelectorAll("input");
let input3 = inputs[1];
// console.log(input3);

// input3.addEventListener("submit", getValue);

let form = document.querySelector("form");
form.addEventListener("submit", getValues);

function getValues(e) {
  e.preventDefault();
  let inputs = document.querySelectorAll("input");
  let itemName = inputs[1].value;
  let email = inputs[2].value;
  console.log(itemName, email);
  inputs[1].value = "";
  inputs[2].value = "";
}

// function getValue(e) {
//   let itemValue = e.target.value;
//   console.log(itemValue);
// }

function runEvent(event) {
  console.log("Type of event:" + event.type);
}

function ivent() {
  button.style.backgroundColor = "red";
  button.style.color = "yellow";
}

function buttonClicked(event) {
  console.log(event.target.className);
  console.log(event.target.classList);

  // console.log(event.clientX);
  // console.log(event.clientY);

  // console.log(event.altKey);
  // console.log(event.ctrlKey);
  // console.log(event.shiftKey);
}

let deleteButton = document.createElement("button");
const textDeleteButton = (document.createTextNode = "x");
deleteButton.className = "deletebtn";
deleteButton.style.cursor = "pointer";
deleteButton.append(textDeleteButton);

let lis = document.querySelectorAll("li");
let li = lis[lis.length - 1];
li.appendChild(deleteButton);

li.style.display = "flex";
li.style.justifyContent = "space-between";
