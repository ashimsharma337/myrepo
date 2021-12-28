const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

// Set Storage Engine
const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

// Init upload 
const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},                // bytes||if 10 file throws errors file too large
    fileFilter: function(req, file, cb) {       // to filter file to upload only image     
    checkFileType(file, cb);
    }        
}).single("myImage");

// Check File Type
function checkFileType(file, cb) {
    // Allowed extension
    const filetypes = /jpeg|jpg|png|gif/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime type
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname) {
        return cb(null, true);
    } else {
        cb("Error: Images only!");
    }
}

// Init app
const app = express();

const port = 3000;

// EJS
app.set("view engine", "ejs");

// Static / Public folder
app.use(express.static("./public"));

app.get("/", (req, res) => res.render("index"));

app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
          if(err) {
             res.render("index", {
                 msg: err
             });
          } else {
          if(req.file == undefined) {
            res.render("index", {
               msg: "Error: No file selected!"
            });
          
          } else {
              res.render("index", {
                  msg: "File uploaded!",
                  file: `uploads/${req.file.filename}`
              });
          }
          };
    });
});

app.listen(port, () => console.log(`Server started at port ${port}`));