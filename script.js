let button = document.querySelector('button');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
const tbody = document.querySelector('tbody');
const checkbox = document.getElementById('checkbox');
const table = document.querySelector('table');

document.addEventListener('DOMContentLoaded', () =>{


})
// Declare empty array for library
let myLibrary = [];

//Object constructor
function Book(title, author, pages, checkbox) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = checkbox;
}

//Adds book to the library
button.addEventListener('click', (e) => {
  e.preventDefault();
   const trow1 = document.querySelectorAll('tbody > tr');
   console.log('timeout');
   trow1.forEach((row) => {
     row.remove();
   });

  //Make sure array is cleared before adding a book
  // myLibrary = [];

  //Make sure checkbox has a value of read or not read
  if (checkbox.checked) {
    checkbox.value = 'I have read';
  } else {
    checkbox.value = 'I have not read';
  }

  //Make sure all inputs have been filled out and displays books
  if (title.value == '' || author.value == '' || isNaN(pages.value)) {
    alert('Please fill out all fields correctly');
  } else {
  let newBook = new Book(title.value, author.value, pages.value, checkbox.value);
  addBookToLibrary(newBook);
}

  document.querySelector('form').reset();

  displayBooks();
});

let book1 = new Book('Kafka on the shore', 'Haruki Murakami', 480, 'I have read');
let book2 = new Book('Emily the Strange', 'Jessica Gruner', 264, 'I have not read');
let book3 = new Book('Siyar Al-muluk', 'Nizam Al-mulk', 325, 'I have not read');

//Pushes input into the array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

//Takes the data from user and displays it on the table
function displayBooks() {
  // addBookToLibrary(title.value, author.value, pages.value, checkbox.value);

  myLibrary.forEach((bookshelf, index) => {
    const row = document.createElement('tr');
    const readStatus = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const dataReadBtn = document.createElement('td');
    const dataDeleteBtn = document.createElement('td');

    deleteBtn.classList.add('domBtn');
    readStatus.classList.add('domBtn');

    readStatus.textContent = 'Change read status';
    deleteBtn.textContent = 'Delete';


    for (let key in bookshelf) {
      const data = document.createElement('td');
      data.textContent = `${bookshelf[key]}`;
      row.appendChild(data);
      tbody.appendChild(row);
    }

    dataReadBtn.appendChild(readStatus);
    dataDeleteBtn.appendChild(deleteBtn);
    row.appendChild(dataReadBtn);
    row.appendChild(dataDeleteBtn);

    //Button to change read status
    readStatus.addEventListener('click', () => {
      let status = row.cells[3];
      console.log(status.textContent)

      if (bookshelf.read == 'I have not read') {
        bookshelf.read = 'I have read';
        status.textContent = bookshelf.read;
      } else if (bookshelf.read == 'I have read') {
        bookshelf.read = 'I have not read';
        status.innerHTML = bookshelf.read;
      }
    });

    //Button to remove book from library
    deleteBtn.addEventListener('click', (e) => {
      myLibrary.splice(index,1)
      tbody.removeChild(row);
      // row.removeChild(dataDeleteBtn);
      // row.removeChild(dataReadBtn);
    });
  });
};
displayBooks();