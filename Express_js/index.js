import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the home page.</h1>");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});