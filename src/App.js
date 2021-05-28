import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { serverLoc } from './constants';

import './App.css';

let notes = [];

function toggleChildren(element) {
  if (element.length <= 0) return;
  if (element === null) return console.error('Element sent to disableChildren is null.');

  for(let i = 0; i < element.length; i++) {
    element.children[i].disabled = !element.children[i].disabled;
  }
}

function App() {
  return (
    <main className="App">
      <AddNote/>
    </main>
  );
}

function AddNote() {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteBody, setNoteBody] = useState('');

  function submitNewNote(e) {
    e.preventDefault();
    const addNoteForm = document.getElementById('addNoteForm');
    toggleChildren(addNoteForm);
    /* Database functionality. */
    /*
    axios.post(`${serverLoc}/notes/`, { title: noteTitle, body: noteBody })
    .then(res => {
      console.log(res);
      toggleChildren(addNoteForm);
    })
    .catch(err =>{
      console.log(err);
    })
    */

    /* For testing functionality without a database. */
    notes.push({title: noteTitle, body: noteBody});
    toggleChildren(addNoteForm);
  }

  return (
    <form id="addNoteForm" onSubmit={(e) => submitNewNote(e)}>
      <input type="text" onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle}></input>
      <textarea onChange={(e) => setNoteBody(e.target.value)} value={noteBody}></textarea>
      <button type="submit">Add note</button>
    </form>
  )
}
export default App;
