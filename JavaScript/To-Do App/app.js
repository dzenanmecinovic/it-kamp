"use strict";
window.addEventListener("load", () => {
  const form = document.querySelector("form"); // forma
  const input = document.querySelector("#addItems"); // input add items
  const list_element = document.querySelector("#tasks"); //glavni div

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

    // Pravimo INPUT sa klasom TEXT i tipom TEXT
    const inputElement = document.createElement("input");
    // Dodeljujemo mu klasu 'text'
    inputElement.classList.add("text");
    // Dodeljujemo mu tip 'text'
    inputElement.type = "text";

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
  });
});
