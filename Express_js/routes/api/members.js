import express from "express";
import { members } from "../../Members.js";

const router = express.Router();

// Gets All Members
router.get("/", (req, res) => res.json(members));

// Get Single Member
router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === Number(req.params.id));
    if(found) {
       res.json(members.filter(member =>  member.id === Number(req.params.id)));
    } else {
       res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
    }
    
});


export { router };