const router = require('express').Router();
const express = require('express')
const fs = require("fs")
const path = require('path');

// function writeNotes(notes) {
//     fs.writeFileSync(path.join(__dirname, "../db/db.json"), notes, (err) => {
//       if (err) throw err;
//       console.log("Your note has been saved.");
//     });
//   }

//   function readNotes() {
//     fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, note) => {
//       if (err) throw err;
//       console.log(notes);
//       return note;
//     });

  router.get("/api/notes", (req, res) => {
    console.log("We hit our notes route!");
    fs.readFile(path.join(__dirname, "../db/db.json", "utf8", (err, note) => {
      if (err) throw err;
      console.log(note);
      res.json(JSON.parse(note));
    })
   );
  });

  router.post("/api/notes", (req, res) => {
    fs.writeFile(path.join(__dirname, "../db/db.json"), note, (err) => {
      if (err) throw err;
      console.log("Saved!");
    });
  });


    // fs.writeFile(fileName, variable, function (err) {
    //   if (err) throw err;
    //   console.log("Saved!");
    // });

  module.exports = router;