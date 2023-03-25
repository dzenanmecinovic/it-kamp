"use strict";

let secretNum = document.querySelector("#secretNum");
let secretNumber = Math.trunc(Math.random() * 20) + 1; // 1-20
let input = document.querySelector("#broj");
let checkBtn = document.querySelector("#check");
let skor = document.querySelector("#score");
let najveciSkor = document.querySelector("#highscore");

checkBtn.disabled = false;

let score = `20`;
let highscore = `0`;

checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value) {
    alert("Unesite broj!");
  } else if (+input.value > 20 || +input.value < 1) {
    poruka("Broj mora biti izmedju 1 i 20! 😊");
  } else if (+input.value === secretNumber) {
    poruka("Tacan odgovor! 😎");
    console.log(true);
    checkBtn.disabled = true;
  } else if (+input.value < secretNumber) {
    console.log(false);
    poruka("Previše nisko! 😥");
    score--;
    displayScore();
  } else if (+input.value > secretNumber) {
    console.log(false);
    poruka("Previše visoko! 😥");
    score--;
    displayScore();
  }
});

// funkcije

function poruka(poruka) {
  document.querySelector("#status").textContent = poruka;
}

function displayScore() {
  skor.textContent = `Score: ${score}`;
}
