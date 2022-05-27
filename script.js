let button = document.querySelector("button");
let title = document.getElementById("title");
let author = document.getElementById("author");
let pages = document.getElementById("pages");
const tbody = document.querySelector("tbody");
const checkbox = document.getElementById("checkbox");
const table = document.querySelector("table");

// Declare empty array for library
let myLibrary = [];

//Adds book to the library
button.addEventListener("click", () => {
  //Make sure array is cleared before adding a book
  myLibrary = [];

  //Make sure checkbox has a value of read or not read
  if (checkbox.checked) {
    checkbox.value = "I have read";
  } else {
    checkbox.value = "I have not read";
  }

  //Make sure all inputs have been filled out and displays books
  if (title.value == "" || author.value == "" || isNaN(pages.value)) {
    alert("Please fill out all fields correctly");
  } else {
    displayBooks();
    document.querySelector("form").reset();
  }
});

//Object constructor
function Book(title, author, pages, checkbox) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = checkbox;
}

//Pushes input into the array
function addBookToLibrary(title, author, pages, checkbox) {
  let book = new Book(title, author, pages, checkbox);
  myLibrary.push(book);
}

//Takes the data from user and displays it on the table
function displayBooks() {
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
    readStatus.addEventListener("click", () => {
      let status = row.cells[3];

      if (myLibrary.read == "I have not read") {
        myLibrary.read = "I have read";
        status.textContent = myLibrary.read;
      } else if (myLibrary.read == "I have read") {
        myLibrary.read = "I have not read";
        status.textContent = myLibrary.read;
      }
    });

    //Button to remove book from library
    deleteBtn.addEventListener("click", () => {
      tbody.removeChild(row);
      row.removeChild(dataDeleteBtn);
      row.removeChild(dataReadBtn);
    });
  });
}
