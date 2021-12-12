import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

const members = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@email.com",
        status: "active"
    },
    {
        id: 2,
        name: "Bob Williams",
        email: "boewille@email.com",
        status: "inactive"
    },
    {
        id: 3,
        name: "sharon lee",
        email: "leesharon@email.com",
        status: "active"
    },
];

// Gets all members
app.get("/api/members", (req, res) => res.json(members));


// Set static folder
app.use(express.static(process.cwd()+"/Public"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ......`)
});