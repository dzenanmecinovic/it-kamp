let secretNumber = Math.trunc(Math.random() * 20) + 1;
let number = document.getElementById("secretNum");
let input = document.getElementById("broj");
let checkBtn = document.getElementById("check");
let skor = document.getElementById("score");
let najveciSkor = document.getElementById("highscore");
let poruka = document.getElementById("status");
let againBtn = document.getElementById("again");
let score = 20;
let highscore = 0;
skor.textContent = `Score: ${score}`;
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!input.value) alert("Enter the number !");
  if (input.value < 1 || input.value > 20) {
    displayMessage("1-20!");
  } else if (+input.value == secretNumber) {
    console.log(true);
    displayMessage("Correct! 😁");
    highscore = score;
    najveciSkor.textContent = "Highscore:" + " " + highscore;
    checkBtn.disabled = true;
    document.querySelector("body").style.backgroundColor = "#32bc11";
  } else if (+input.value > secretNumber) {
    displayMessage("Too high ☝🏾");
    score--;
    skor.textContent = `Score:${score}`;
    console.log(false);
    if (score <= 1) {
      displayMessage("You lost 👎🏾");
      checkBtn.disabled = true;
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (+input.value < secretNumber) {
    displayMessage("Too low 👇🏾");
    score--;
    skor.textContent = `Score: ${score}`;
    console.log(false);
    if (score <= 1) {
      displayMessage("You lost 👎🏾");
      checkBtn.disabled = true;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});
againBtn.addEventListener("click", (e) => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  e.preventDefault();
  checkBtn.disabled = false;
  score = 20;
  skor.textContent = `Score: ${score}`;
  input.value = "";
  document.querySelector("body").style.backgroundColor = "white";
});
function displayMessage(obavestenje) {
  poruka.textContent = `${obavestenje}`;
}
