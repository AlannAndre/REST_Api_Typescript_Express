import express from "express";
import { booksRouter } from "./books/books.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import {logger} from "./api.controller"
import {validateBody} from "./books/books.controller";

const app = express();
app.use(logger);
app.use(express.json());
app.use("/api/menu/books", validateBody, booksRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(3000,() => {
    console.log("server is running on http://localhost:3000");
})
