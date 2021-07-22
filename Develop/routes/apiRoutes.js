const router = require('express').Router();
const express = require('express')
const fs = require("fs")
const path = require('path');
const app = express();

function writeNotes(note) {
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), note, (err) => {
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

  module.exports = (app) => {

    app.get("/api/notes", (res, req)=> {
        const notes = readNotes();
        res.json(notes);
    });

    app.post("/api/notes", (res, req) => {
        readNotes().then((notes) => {
            notes.push(req.body);
            writeNotes(notes);
            res.json(req.body);
        });
  });
};