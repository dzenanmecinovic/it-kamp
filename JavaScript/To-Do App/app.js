"use strict";

const form = document.querySelector("form"); // forma
const input = document.querySelector("#addItems"); // input add items
const list_element = document.querySelector("#tasks"); //glavni div
const submit = document.getElementById("submit");
submit.value = "Submit";
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Submit form");
  const vrednost = input.value;

  // U slucaju praznog inputa
  if (!vrednost) {
    alert("Polje ne sme biti prazno");
    return;
  }

  // Pravimo DIV sa klasom TASK
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  // Pravimo DIV sa klasom CONTENT
  const contentDiv = document.createElement("div");
  // Dodeljujemo mu klasu 'content'
  contentDiv.classList.add("content");
  // Content Divu dodeljujemo tekst unete vrednosti
  contentDiv.innerText = vrednost;

  // Appenduje se div.content kao child task diva
  taskDiv.appendChild(contentDiv);

  // Pravimo DIV sa klasom ACTIONS
  const actionsDiv = document.createElement("div");
  // Dodeljujemo mu klasu 'actions'
  actionsDiv.classList.add("actions");

  // Pravimo BUTTON sa klasom 'delete'
  const deleteBtn = document.createElement("button");
  // Dodajemo mu klasu 'delete'
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";

  // Appenduje se button kao child taskDiva
  taskDiv.appendChild(deleteBtn);

  // Unutar (div#tasks) Liste appenduje se div.task
  list_element.appendChild(taskDiv);

  // Delete buttonu se dodaje funkcija brisanja taska
  deleteBtn.addEventListener("click", deleteTask);

  // Funkcija brisanja taska
  function deleteTask() {
    list_element.removeChild(taskDiv);
  }

  // Brisanje teksta iz addItems inputa
  input.value = "";
});
