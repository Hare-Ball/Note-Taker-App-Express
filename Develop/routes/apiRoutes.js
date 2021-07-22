const router = require('express').Router();
const express = require('express')
const fs = require("fs")
const path = require('path');

function writeNotes(notes) {
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), notes, (err) => {
      if (err) throw err;
      console.log("Your note has been saved.");
    });
  }

  function readNotes() {
    fs.readFileSync(path.join(__dirname, "../db/db.json"), (err, note) => {
      if (err) throw err;
      console.log(notes);
      return note;
    });
  }

  router.get("/api/notes", (req, res)=> {
    console.log("We hit our notes route!");
    const notes = readNotes();
    console.log(notes);
    res.json(notes);
    });

  router.post("/api/notes", (req, res) => {
    readNotes().then((note) => {
        note.push(req.body);
        writeNotes(note);
        res.json(req.body);
    });
   }); 

  module.exports = router;