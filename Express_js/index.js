import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;


// Set static folder
app.use(express.static(process.cwd()+"/Public"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});