const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// Init app
const app = express();

const port = 3000;

// EJS
app.set("view engine", "ejs");

// Static / Public folder
app.use(express.static("./public"));

app.get("/", (req, res) => res.render("index"));

app.listen(port, () => console.log(`Server started at port ${port}`));