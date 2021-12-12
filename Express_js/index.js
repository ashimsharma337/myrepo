import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
    res.sendFile(process.cwd()+"/Public/index.html");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});