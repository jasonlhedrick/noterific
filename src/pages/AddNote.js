import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import toggleDisableChildElements from '../helpers/toggleDisableChildElements';

function AddNote(props) {
    let setAppNotes = props.setAppNotes;
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
  
    function submitNewNote(e) {
      e.preventDefault();
      const addNoteFormFieldset = document.getElementById('addNoteFormFieldset');
      toggleDisableChildElements(addNoteFormFieldset);
      /* Database functionality. */
      
      
      /* For testing functionality without a database. */
      setAppNotes(appNotes => [...appNotes, {title: noteTitle, body: noteBody}]);
      toggleDisableChildElements(addNoteFormFieldset);
    }
  
    return (
      <form id="addNoteForm" onSubmit={(e) => submitNewNote(e)}>
        <fieldset id="addNoteFormFieldset">
            <legend>Create a note!</legend>
            <input id="addNoteTitle" required type="text" onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle}></input>
            <textarea id="addNoteBody" required onChange={(e) => setNoteBody(e.target.value)} value={noteBody}></textarea>
            <Button type="submit">Add note</Button>
        </fieldset>
      </form>
    )
  }

  export default AddNote;