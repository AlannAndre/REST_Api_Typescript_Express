//import { allBooks, findBook } from "./main";
import { getAllBooks, getOneBook } from "./controller";

export function setupAllBooks(element: HTMLButtonElement) {
  element.innerHTML = "Get all books";
  element.addEventListener("click", () => RenderAllBooks());
}

export function setupFindBook(element: HTMLButtonElement) {
  element.innerHTML = "Get one book"
  element.addEventListener("click", () => inputBookId());
}

export function setupAddBooks(element: HTMLButtonElement) {
  element.innerHTML = `Add a new book`;
}

export function setupUpdateBook(element: HTMLButtonElement) {
    element.innerHTML = `Update a book`;
};

export function setupDeleteBook(element: HTMLButtonElement) {
  element.innerHTML = `Delete a book`;
}

export function renderMain(){
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#getOneBook")!.innerHTML = "";
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = "";
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
}

function RenderAllBooks(){
  renderMain();
  renderDataForAllBooks();
}

async function inputBookId() {
  renderMain();
  document.querySelector<HTMLDivElement>("#getAllBooks")!.innerHTML = "";
  await getBookId();
}

async function getBookId(){
  document.querySelector<HTMLDivElement>("#inputBookId")!.innerHTML = `
  <form id="bookIdForm">
    <label for="bookId">Enter Book id:</label><br>
    <input type="number" id="bookId" name="bookId" required min="0"><br>
    <input type="reset" value="Reset">
    <input type="submit" value="Send Id">
  </form>
`;
  const bookIdForm = document.getElementById("bookIdForm") as HTMLFormElement;
  var bookId=0;
  bookIdForm.onsubmit = async (e) => {
    // prevent the form from submitting
    e.preventDefault();

    // show the form values
    const formData = new FormData(bookIdForm);
    let values = [...formData.entries()];
    console.log(values[0][1]);
    bookId = Number(values[0][1]);
    RenderOneBook(bookId);
  };
}

function RenderOneBook(bookId: number) {
  renderMain();
  renderDataForOneBook(bookId);
}

async function renderDataForOneBook(bookId: number) {
  var findBook = await getOneBook(bookId);
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
      .appendChild(document.createElement("td")).innerHTML = findBook.Image;
  }
}

async function renderDataForAllBooks() {
  var allBooks = await getAllBooks();
  for (let i = 0; i < allBooks.length; i++) {
    if (document.getElementById("tbody-renderBooks") != null) {
      document
        .getElementById("tbody-renderBooks")!
        .appendChild(document.createElement("br"));
      document
        .getElementById("tbody-renderBooks")!
        .appendChild(document.createElement("tr"))
        .setAttribute("id", "tr-renderBooks"+i);
      document
        .getElementById("tr-renderBooks"+i)!
        .appendChild(document.createElement("td")).setAttribute("id", "id"+i);
      document.getElementById("id"+i)!.innerHTML = 
          allBooks[i].id;
      document
        .getElementById("tr-renderBooks"+i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Author;
      document
        .getElementById("tr-renderBooks"+i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Title;
      document
        .getElementById("tr-renderBooks"+i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Pages;
      document
        .getElementById("tr-renderBooks"+i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Description;
      document
        .getElementById("tr-renderBooks"+i)!
        .appendChild(document.createElement("td")).innerHTML =
        allBooks[i].Image;
    }
  }
}