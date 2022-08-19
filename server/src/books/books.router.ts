import express, { Request, Response } from "express";
import * as BookService from "./books.service";
import { BaseBook, Book } from "./book.interface";

export const booksRouter = express.Router();

// GET books

booksRouter.get("/", async (req: Request, res: Response) => {
  try {
    const books: Book[] = await BookService.findAll();
    res.status(200).json(books);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET books/:id

booksRouter.get("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const book: Book = await BookService.find(id);
    if (book) {
      return res.status(200).json(book);
    }
    res.status(404).send("book not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST books

booksRouter.post("/", async (req: Request, res: Response) => {
  try {
    const book: BaseBook = req.body;
    const newBook = await BookService.create(book);
    res.status(201).json(newBook);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PUT books/:id

booksRouter.put("/:id", async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
  try {
    const bookUpdate: Book = req.body;
    const existingBook: Book = await BookService.find(id);
    if (existingBook) {
      const updatedBook = await BookService.update(id, bookUpdate);
      return res.status(200).json(updatedBook);
    }
    const newBook = await BookService.create(bookUpdate);
    res.status(201).json(newBook);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE books/:id

booksRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await BookService.remove(id);
    res.status(204).json(null);
  } catch (e) {
    res.status(500).send(e.message);
  }
});