let button = document.querySelector('button');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
const tbody = document.querySelector('tbody');
const checkbox = document.getElementById('checkbox');
const table = document.querySelector('table');

// Declare empty array for library
let myLibrary = [];

//Check if there are any items in local storage
if(localStorage.getItem('myLibrary')) {
  myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
}

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
  const trow = document.querySelectorAll('tbody > tr');

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
    //clear rows before re-displaying with new book
    trow.forEach((row) => {
      row.remove();
    });

    let newBook = new Book(title.value, author.value, pages.value, checkbox.value);
    addBookToLibrary(newBook);
    document.querySelector('form').reset();

    //Add local storage so data persists even if browser is closed or refreshed
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    displayBooks();
  }
});

//Pushes input into the array
function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Populate to show predetermined data
// let book1 = new Book('Kafka on the shore', 'Haruki Murakami', 480, 'I have read');
// let book2 = new Book('Emily the Strange', 'Jessica Gruner', 264, 'I have not read');
// let book3 = new Book('Siyar Al-muluk', 'Nizam Al-mulk', 325, 'I have not read');

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

//Takes the data from user and displays it on the table
function displayBooks() {
  myLibrary.forEach((book, index) => {
    const row = document.createElement('tr');
    const readStatus = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const dataReadBtn = document.createElement('td');
    const dataDeleteBtn = document.createElement('td');

    deleteBtn.classList.add('domBtn');
    readStatus.classList.add('domBtn');

    readStatus.textContent = 'Change read status';
    deleteBtn.textContent = 'Delete';

    for (let key in book) {
      const data = document.createElement('td');
      data.textContent = `${book[key]}`;
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

      if (book.read == 'I have not read') {
        book.read = 'I have read';
        status.textContent = book.read;
      } else if (book.read == 'I have read') {
        book.read = 'I have not read';
        status.innerHTML = book.read;
      }
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });

    //Button to remove book from library
    deleteBtn.addEventListener('click', (e) => {
      myLibrary.splice(index,1)
      tbody.removeChild(row);
      localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    });
  });
};
displayBooks();