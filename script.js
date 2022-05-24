let button = document.querySelector("button");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
const table = document.querySelector("table");
const checkbox = document.getElementById("checkbox");

button.addEventListener("click", () => {
  /*  const titleData = document.createElement("td");
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
  */
  if (checkbox.checked) {
    checkbox.value = "I have read";
  } else {
    checkbox.value = "I have not read";
  }
  Book();

  addBookToLibrary(title.value, author.value, pages.value, checkbox.value);

  displayBooks();

  console.log(myLibrary);
});

// Declare empty array for library
let myLibrary = [];

function Book(title, author, pages, checkbox) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = checkbox;
}

function addBookToLibrary(title, author, pages, checkbox) {
  let book = new Book(title, author, pages, checkbox);
  myLibrary.push(book);
}

function displayBooks() {
  myLibrary.forEach((myLibrary) => {
    const row = document.createElement("tr");
    table.appendChild(row);
    for (let key in myLibrary) {
      const data = document.createElement("td");
      data.textContent = `${myLibrary[key]}`;
      row.appendChild(data);
    }
  });
}

// addBookToLibrary(title.value, author.value, pages.value, checkbox.value);
// addBookToLibrary("The Hobbit", "JRR", "600", "I have not read");
// addBookToLibrary("The Hobbit", "JRR", "600", "I have not read");
// addBookToLibrary("The Hobbit", "JRR", "600", "I have not read");

// displayBooks();

console.log(myLibrary);
