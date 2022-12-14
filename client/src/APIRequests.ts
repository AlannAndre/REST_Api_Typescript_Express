import {
  getAllBooks,
  getOneBook,
  deleteOneBook,
  addNewBook,
  uppdateBook,
  getChuckFacts,
} from "./controller";

//Button, text and event

export function setupAllBooks(element: HTMLButtonElement) {
  element.innerHTML = "Get all books";
  element.addEventListener("click", () => RenderAllBooks());
}

export function setupFindBook(element: HTMLButtonElement) {
  element.innerHTML = "Get one book"
  element.addEventListener("click", () => getOneBookById());
}

export function setupAddBooks(element: HTMLButtonElement) {
  element.innerHTML = `Add a new book`;
  element.addEventListener("click", () => addANewBook());
}

export function setupUpdateBook(element: HTMLButtonElement) {
    element.innerHTML = `Update a book`;
    element.addEventListener("click", () => uppdateABook());
};

export function setupDeleteBook(element: HTMLButtonElement) {
  element.innerHTML = `Delete a book`;
  element.addEventListener("click", () => deleteOneBookById());
}

export function setupChuckFacts(element: HTMLButtonElement) {
  element.innerHTML = `Get some Chuck facts`;
  element.addEventListener("click", () => getSomeChuckFacts());
}

//Render functions

export function renderMain(){
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#getOneBook")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookData")!.innerHTML = ""; 
}

function RenderAllBooks(){
  renderMain();
  renderDataForAllBooks();
}

function RenderOneBook(bookId: number) {
  renderMain();
  renderDataForOneBook(bookId);
}

async function renderDataForOneBook(bookId: number) {
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = `
  <div>
    <table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Title</th>
            <th>Pages</th>
            <th>Description</th>
            <th>Book cover</th>
        </tr>
    </thead>
    <tbody id="tbody-renderBooks"></tbody>
  </table>
  </div>
`;
  var findBook = await getOneBook(bookId);
  if (findBook.id!=undefined){
    if (document.getElementById("tbody-renderBooks") != null) {
      document
        .getElementById("tbody-renderBooks")!
        .appendChild(document.createElement("br"));
      document
        .getElementById("tbody-renderBooks")!
        .appendChild(document.createElement("tr"))
        .setAttribute("id", "tr-renderBooks");
      document
        .getElementById("tr-renderBooks")!
        .appendChild(document.createElement("td")).innerHTML = findBook.id;
      document
        .getElementById("tr-renderBooks")!
        .appendChild(document.createElement("td")).innerHTML = findBook.Author;
      document
        .getElementById("tr-renderBooks")!
        .appendChild(document.createElement("td")).innerHTML = findBook.Title;
      document
        .getElementById("tr-renderBooks")!
        .appendChild(document.createElement("td")).innerHTML = findBook.Pages;
      document
        .getElementById("tr-renderBooks")!
        .appendChild(document.createElement("td")).innerHTML =
        findBook.Description;
      document
        .getElementById("tr-renderBooks")!
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("img")).src = findBook.Image;
    }
  }
  else { 
    renderBookNotFound();
  }
}

async function renderDataForAllBooks() {
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = `
  <div>
    <table class="table">
    <thead>
        <tr>
            <th>Id</th>
            <th>Author</th>
            <th>Title</th>
            <th>Pages</th>
            <th>Description</th>
            <th>Book cover</th>
        </tr>
    </thead>
    <tbody id="tbody-renderBooks"></tbody>
  </table>
  </div>
`;
  var allBooks = await getAllBooks();
  for (let i = 0; i < allBooks.length; i++) {
    if (document.getElementById("tbody-renderBooks") != null) {
      document
        .getElementById("tbody-renderBooks")!
        .appendChild(document.createElement("br"));
      document
        .getElementById("tbody-renderBooks")!
        .appendChild(document.createElement("tr"))
        .setAttribute("id", "tr-renderBooks" + i);
      document
        .getElementById("tr-renderBooks" + i)!
        .appendChild(document.createElement("td"))
        .setAttribute("id", "id" + i);
      document.getElementById("id" + i)!.innerHTML = allBooks[i].id;
      document
        .getElementById("tr-renderBooks" + i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Author;
      document
        .getElementById("tr-renderBooks" + i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Title;
      document
        .getElementById("tr-renderBooks" + i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Pages;
      document
        .getElementById("tr-renderBooks" + i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Description;
      document
        .getElementById("tr-renderBooks" + i)!
        .appendChild(document.createElement("td"))
        .appendChild(document.createElement("img")).src = allBooks[i].Image;
    }
  }
}

function renderBookNotFound() {
  renderMain();
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = `
  <h2>Book id not found<h2>
  `;
}

//API request functions functions

async function getOneBookById() {
  renderMain();
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = `
  <form id="bookIdForm">
    <label for="bookId">Enter Book id:</label><br>
    <input type="number" id="bookId" name="bookId" required min="0"><br>
    <input type="reset" value="Reset">
    <input type="submit" value="Send Id">
  </form>
`;
  const bookIdForm = document.getElementById("bookIdForm") as HTMLFormElement;
  let bookId;
  bookIdForm.onsubmit = async (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(bookIdForm);
    let values = [...formData.entries()];
    bookId = Number(values[0][1]);
    RenderOneBook(bookId);
  };
}

async function addANewBook() {
  renderMain();
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookData")!.innerHTML = `
  <form id="bookCreateForm">
    <div>
      <label for="Author">Author</label><br>
      <input type="text" id="bookAuthor" name="Author" required><br>
    </div>
    <div>
      <label for="Title">Title</label><br>
      <input type="text" id="bookName" name="Title" required><br>
    </div>
    <div>
      <label for="Pages">Number of pages</label><br>
      <input type="number" id="numberOfPages" name="Pages" required min="0"><br>
    </div>
    <div>
      <label for="Description">Description</label><br>
      <textarea id="bookDescription" name="Description" required></textarea><br>
    </div>
    <div>
      <label for="Image">Book Cover</label><br>
      <input type="text" id="bookCover" name="Image" required><br>
    </div>
    <input type="reset" value="Reset">
    <input type="submit" value="Send Data">
  </form>
`;
  const bookCreateForm = document.getElementById(
    "bookCreateForm"
  ) as HTMLFormElement;
  bookCreateForm.onsubmit = async (e) => {
    // prevent the form from submitting
    e.preventDefault();
    let formData = new FormData(bookCreateForm);
    let values = [...formData.entries()];
    var newBook = {
      Author: values[0][1],
      Title: values[1][1],
      Pages: values[2][1],
      Description: values[3][1],
      Image: values[4][1],
    };
    await addNewBook(newBook);
    RenderAllBooks();
  };
}

async function uppdateABook() {
  renderMain();
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = `
  <form id="bookIdForm">
    <label for="bookId">Enter id of book to update:</label><br>
    <input type="number" id="bookId" name="bookId" required min="0"><br>
    <input type="reset" value="Reset">
    <input type="submit" value="Send Id">
  </form>
`;
  const bookIdForm = document.getElementById("bookIdForm") as HTMLFormElement;
  //let bookId;
  bookIdForm.onsubmit = async (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(bookIdForm);
    let values = [...formData.entries()];
    let bookId = Number(values[0][1]);
    var findBookToUpdate = await getOneBook(bookId);
    if (findBookToUpdate.id != undefined) {
      document.querySelector<HTMLDivElement>("#inputBookData")!.innerHTML = `
          <form id="bookUpdateForm">
          <div>
            <label for="Author">Author</label><br>
            <input type="text" id="bookAuthor" name="Author" value="${findBookToUpdate.Author}" required><br>
          </div>
          <div>
            <label for="Title">Title</label><br>
            <input type="text" id="bookName" name="Title" value="${findBookToUpdate.Title}" required><br>
          </div>
          <div>
            <label for="Pages">Number of pages</label><br>
            <input type="number" id="numberOfPages" name="Pages" value="${findBookToUpdate.Pages}" required min="0"><br>
          </div>
          <div>
            <label for="Description">Description</label><br>
            <textarea id="bookDescription" name="Description" required>${findBookToUpdate.Description}</textarea><br>
          </div>
          <div>
            <label for="Image">Book Cover</label><br>
            <input type="text" id="bookCover" name="Image" value="${findBookToUpdate.Image}" required><br>
          </div>
          <input type="reset" value="Reset">
          <input type="submit" value="Send Data">
        </form>
          `;
      const bookUpdateForm = document.getElementById(
        "bookUpdateForm"
      ) as HTMLFormElement;
      bookUpdateForm.onsubmit = async (e) => {
        // prevent the form from submitting
        e.preventDefault();
        let formData = new FormData(bookUpdateForm);
        let values = [...formData.entries()];
        var updatedBook = {
          Author: values[0][1],
          Title: values[1][1],
          Pages: values[2][1],
          Description: values[3][1],
          Image: values[4][1],
        };
        await uppdateBook(bookId, updatedBook);
        RenderAllBooks();
      };
    } 
    else {
      renderBookNotFound();
    }
  } ;
}

async function deleteOneBookById() {
  renderMain();
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = `
  <form id="bookIdForm">
    <label for="bookId">Enter id of book to delete:</label><br>
    <input type="number" id="bookId" name="bookId" required min="0"><br>
    <input type="reset" value="Reset">
    <input type="submit" value="Send Id">
  </form>
`;
  const bookIdForm = document.getElementById("bookIdForm") as HTMLFormElement;
  let bookId;
  bookIdForm.onsubmit = async (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(bookIdForm);
    let values = [...formData.entries()];
    bookId = Number(values[0][1]);
    var findBookToUpdate = await getOneBook(bookId);
    if (findBookToUpdate.id != undefined) {
      deleteOneBook(bookId);
      RenderAllBooks();
    }
    else {
      renderBookNotFound();
    }
  };
}

// Extra get function

async function getSomeChuckFacts() {
  renderMain();
  const chuckFacts = await getChuckFacts(); 
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = `
  <h1>${chuckFacts.value}<H1>
`;
}