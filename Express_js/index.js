import express from "express";
import { members } from "./Members.js";

const app = express();
const PORT = process.env.PORT || 8000;

// creating middleware
const logger = (req, res, next) => {
     console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
     next();
};

// Init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));


// Set static folder
app.use(express.static(process.cwd()+"/Public"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});