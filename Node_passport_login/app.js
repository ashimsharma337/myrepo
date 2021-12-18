const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
.then(() => console.log("MongoDB connected....."))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");


// Routes"
app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));


app.listen(PORT, () =>{
    console.log(`Server is listening at ${PORT}.`);
});