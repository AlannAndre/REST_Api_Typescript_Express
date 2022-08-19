import { Request, Response, NextFunction } from "express";
import { bookSchema } from "./book.interface";

export const validateBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = bookSchema.validate(req.body);
  if (result.error) {
    res.status(400).json(result.error.message);
  } else {
    next();
  }
};

