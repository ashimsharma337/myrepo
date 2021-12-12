import express from "express";
import { members } from "./Members.js";
import  moment  from "moment";
import { logger } from "./middleware/logger.js";

const app = express();
const PORT = process.env.PORT || 8000;



// Init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));


// Set static folder
app.use(express.static(process.cwd()+"/Public"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});