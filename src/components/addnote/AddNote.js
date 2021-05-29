import React, { useState } from 'react';

import toggleDisableChildElements from '../../helpers/toggleDisableChildElements';

function AddNote(props) {
    let appNotes = props.appNotes;
    let setAppNotes = props.setAppNotes;
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
  
    function submitNewNote(e) {
      e.preventDefault();
      const addNoteForm = document.getElementById('addNoteForm');
      toggleDisableChildElements(addNoteForm);
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
      console.log(appNotes);
      setAppNotes(appNotes => [...appNotes, {title: noteTitle, body: noteBody}]);
      toggleDisableChildElements(addNoteForm);
    }
  
    return (
      <form id="addNoteForm" onSubmit={(e) => submitNewNote(e)}>
        <input required type="text" onChange={(e) => setNoteTitle(e.target.value)} value={noteTitle}></input>
        <textarea required onChange={(e) => setNoteBody(e.target.value)} value={noteBody}></textarea>
        <button type="submit">Add note</button>
      </form>
    )
  }

  export default AddNote;