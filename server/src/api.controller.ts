import { NextFunction, Request, Response } from "express";

export function getOneObject (req: Request <{id: string}>, res: Response) {
    console.log(req.params.id);
    res.status(200).json("Hello World");
};

export function getAllObjects (req: Request, res: Response) {
    res.status(200).json("Hello World");
};

export const saveObject = (req: Request, res: Response) => {
    const data = req.body;
    //TODO save to db or at least generate id and save to server
    res.status(201).json(data);
};

export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method, req.path);
    next();
};
