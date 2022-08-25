import express, { Request, Response } from "express";
import * as externalService from "./external.services";

export const externalRouter = express.Router();

// GET External data on Chuck


externalRouter.get("/", async (req: Request, res: Response) => {
  try {
    const getChuckFacts = await externalService.getChuckFacts();
    res.status(200).json(getChuckFacts);
  } catch (e) {
    res.status(500).json({ error: { message: e } });
  }
});

