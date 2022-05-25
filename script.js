let button = document.querySelector("button");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
const tbody = document.querySelector("tbody");
const checkbox = document.getElementById("checkbox");

// Declare empty array for library
let myLibrary = [];

//Button that takes the input and add it to the library
button.addEventListener("click", () => {
  //make sure checkbox has a value of read or not read
  if (checkbox.checked) {
    checkbox.value = "I have read";
  } else {
    checkbox.value = "I have not read";
  }

  //runs function to display the book in the library
  displayBooks();
  console.log(myLibrary);
  //clear array after book has been added
  myLibrary = [];
});

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
  //gets input from user
  addBookToLibrary(title.value, author.value, pages.value, checkbox.value);

  myLibrary.forEach((myLibrary) => {
    const row = document.createElement("tr");
    const readStatus = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const dataReadBtn = document.createElement("td");
    const dataDeleteBtn = document.createElement("td");

    deleteBtn.classList.add("domBtn");
    readStatus.classList.add("domBtn");

    readStatus.textContent = "Change read status";
    deleteBtn.textContent = "Delete";

    tbody.appendChild(row);
    for (let key in myLibrary) {
      const data = document.createElement("td");
      data.textContent = `${myLibrary[key]}`;
      row.appendChild(data);
    }

    dataReadBtn.appendChild(readStatus);
    dataDeleteBtn.appendChild(deleteBtn);
    row.appendChild(dataReadBtn);
    row.appendChild(dataDeleteBtn);

    //Button to change read status
    /*  readStatus.addEventListener("click", () => {
      if (checkbox.checked) {
        Book.checkbox = "I have not readsfdgsdfgdsfg";
      } else checkbox.value = "I have read";
      console.log(Book.checkbox);
    }); */

    //Button to remove book from library
    deleteBtn.addEventListener("click", () => {
      tbody.removeChild(row);
      row.removeChild(dataDeleteBtn);
      row.removeChild(dataReadBtn);
    });
  });
}
