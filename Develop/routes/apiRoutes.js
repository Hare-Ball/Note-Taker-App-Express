const router = require('express').Router();
const fs = require("fs")
const path = require('path');

var jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')))

router.get('/api/notes', (req,res)=> {
  console.log("notes route");
  res.json(jsonData)
});

router.get('/api/notes/:id', (req, res)=>{
  res.json(jsonData[req.params.id]);
  });

router.post("/api/notes", (req, res) => {
  let newNote = req.body;
  let noteId = (jsonData.length).toString();
  newNote.id= noteId
  jsonData.push(newNote);
  console.log(jsonData);

  fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jsonData), (err) => {
    if (err) throw err;
    console.log("Saved!");
  });

  res.json(jsonData)

});

// router.get("/api/notes", (req, res) => {
//   console.log("We hit our notes route!");
//   fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, note) => {
//     if (err) throw err;
//     console.log(note);
//     res.json(JSON.parse(note));
//   });
// });

// router.post("/api/notes", (req, res) => {
//   fs.writeFile(path.join(__dirname, "../db/db.json"), note, (err) => {
//     if (err) throw err;
//     console.log("Saved!");
//   });
// });

// fs.writeFile(fileName, variable, function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

module.exports = router;