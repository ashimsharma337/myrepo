import express from "express";
import { router } from "./routes/api/members.js";

const app = express();
const PORT = process.env.PORT || 8000;



// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folder
app.use(express.static(process.cwd()+"/Public"));

// Members API Routes
app.use("/api/members", router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});