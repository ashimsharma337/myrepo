import express from "express";
import { router } from "./routes/api/members.js";
import { engine } from "express-handlebars";
import { members } from "./Members.js";

const app = express();
const PORT = process.env.PORT || 8000;



// Init Middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', './views');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) => res.render("index", {
    title: "Member App",
    members
}));


// Set static folder
app.use(express.static(process.cwd()+"/Public"));

// Members API Routes
app.use("/api/members", router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});