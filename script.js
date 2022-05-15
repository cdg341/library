let button = document.querySelector("button");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
const table = document.querySelector("table");
const checkbox = document.getElementById("checkbox");

button.addEventListener("click", () => {
  const titleData = document.createElement("td");
  const authorData = document.createElement("td");
  const pagesData = document.createElement("td");
  const readData = document.createElement("td");
  const tr = document.createElement("tr");
  const deleteBtn = document.createElement("button");

  deleteBtn.classList.add("deleteBtn");

  titleData.textContent = title.value;
  authorData.textContent = author.value;
  pagesData.textContent = pages.value;
  deleteBtn.textContent = "Delete";

  if (checkbox.checked) {
    readData.textContent = "I have read";
  } else {
    readData.textContent = "I have not read";
  }

  table.appendChild(titleData);
  table.appendChild(authorData);
  table.appendChild(pagesData);
  table.appendChild(readData);
  //   table.appendChild(deleteBtn);
  table.appendChild(tr);
});

let myLibrary = ["Harry Potter", "The Harder Boys", "Star Wars"];

function Book() {}

function addBookToLibrary() {}
