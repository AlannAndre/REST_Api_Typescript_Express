import express from "express";
import {getAllObjects, getOneObject, logger, saveObject} from "./api.controller"

const app = express();
app.use(logger);
app.use(express.json());
app.use(express.static("public"));

app.get("/api", getAllObjects);
app.get("/api/:id", getOneObject);
app.post("/api", saveObject)

app.listen(3000,() => {
    console.log("server is running on http://localhost:3000");
})
