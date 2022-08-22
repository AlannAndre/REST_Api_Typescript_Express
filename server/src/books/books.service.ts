import { BaseBook, Book } from "./book.interface";
import { Books } from "./books.interface";
import * as fs from "fs";
import { nextTick } from "process";

let books: Books = {
  1: {
    id: 1,
    Author: "Dan Brown",
    Title: "The Da Vinci code",
    Pages: 739,
    Description:
      'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown\'s second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons. The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.',
    Image: "/public/Brown1.jpg",
  },
  2: {
    id: 2,
    Author: "George Orwell",
    Title: "1984",
    Pages: 336,
    Description:
      "Winston Smith works for the Ministry of Truth in London, chief city of Airstrip One. Big Brother stares out from every poster, the Thought Police uncover every act of betrayal. When Winston finds love with Julia, he discovers that life does not have to be dull and deadening, and awakens to new possibilities.",
    Image: "/public/Orwell1.png",
  },
  3: {
    id: 3,
    Author: "Guy de Maupassant",
    Title: "Bel Ami",
    Pages: 394,
    Description:
      "The story chronicles journalist Georges Duroy's corrupt rise to power from a poor former cavalry NCO in France's African colonies, to one of the most successful men in Paris, most of which he achieves by manipulating a series of powerful, intelligent, and wealthy women.",
    Image: "/public/Maupassant2.jpg",
  },
};

let dataFilePath: string = "./src/books/books.json";
function updateDataFile(path: string) {
  fs.writeFile(path, JSON.stringify(books, null, 4), "utf-8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File has been created");
})
};

updateDataFile(dataFilePath);

export const findAll = async (): Promise<Book[]> => Object.values(books);

export const find = async (id: number): Promise<Book> => books[id];

export const create = async (newBook: BaseBook): Promise<Book> => {
  const id = new Date().valueOf();
  books[id] = {id,...newBook};
  updateDataFile(dataFilePath);
  return books[id];
};

export const update = async (id: number,bookUpdate: BaseBook): Promise<Book|null> => {
  const book = await find(id);
  if (!book) {
    return null;
  }
  books[id] = { id, ...bookUpdate};
  updateDataFile(dataFilePath);
  return books[id];
};

export const remove = async (id: number): Promise<null|void> => {
  const book = await find(id);
  if (!book) {
    return null;
  }
  delete books[id];
  updateDataFile(dataFilePath);
};