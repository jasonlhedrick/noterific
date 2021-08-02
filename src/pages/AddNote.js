import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { serverLoc } from '../constants';

import toggleDisableChildElements from '../helpers/toggleDisableChildElements';

function AddNote(props) {
    let setAppNotes = props.setAppNotes;
    const [noteTitle, setNoteTitle] = useState('');
    const [noteBody, setNoteBody] = useState('');
  
    async function submitNewNote(e) {
      const addNoteFormFieldset = document.getElementById('addNoteFormFieldset');
      try {
        e.preventDefault();
        toggleDisableChildElements(addNoteFormFieldset);
        /* Database functionality. */
        await axios.post(`${serverLoc}/notes/`, {title:  noteTitle, body:  noteBody}, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
          }
        });
        const updatedNotes = await axios.get(`${serverLoc}/notes/`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
          }
        });
        if (await updatedNotes.data.notes) {
          setAppNotes(await updatedNotes.data.notes);
          // Clear out the note values if the note properly posted.
          document.getElementById('addNoteTitle').value = '';
          document.getElementById('addNoteBody').value = '';
          toggleDisableChildElements(addNoteFormFieldset);
        }
        toggleDisableChildElements(addNoteFormFieldset);
      } catch(err) {
        toggleDisableChildElements(addNoteFormFieldset);
        console.error(err);
      }
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