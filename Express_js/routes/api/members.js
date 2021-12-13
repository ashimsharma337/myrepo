import express from "express";
import { members } from "../../Members.js";
import { v4 as uuidv4 } from "uuid";

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

// Create Member
router.post("/", (req, res) => {
      const newMember = {
          id: uuidv4(),
          name: req.body.name,
          email: req.body.email,
          status: "active"
      };

      if(!newMember.name || !newMember.email) {
          return res.status(400).json({ msg: "Please include name and email." });
      }

      members.push(newMember);
      res.json(members);
});


export { router };