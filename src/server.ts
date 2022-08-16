import express from "express";

const app = express();

app.get("/",(req,res) => {
    res.status(200).json("Hello World")
})

app.listen(3000,() => {
    console.log("server is running on http://localhost:3000");
})
