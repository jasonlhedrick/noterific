/*
    React functional component which lists all note titles and bodies passed to it in an object array format.
*/
import {
  Link,
} from "react-router-dom";

import { Button, Card } from 'react-bootstrap';
import axios from "axios";
import { serverLoc } from "../constants";

function ListNotes(props) {
  async function removeNoteByID(id) {
      await axios.delete(`${serverLoc}/notes/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }})
      const notes = await axios.get(`${serverLoc}/notes/`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      props.setAppNotes(await notes.data.notes);
  }
  
  return (
      <div id="listNotes">
        {props.appNotes ? 
        props.appNotes.map(note => {
          return (
            <section className="listNoteCardContainer" key={note.note_id}>
              <Button className="btn-RemoveNote" onClick={() => removeNoteByID(note.note_id)}>X</Button>
              <Link to={`/notes/${note.note_id}`}>
                <Card className="list-note-card">
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.body}</Card.Text>
                </Card>
              </Link>
            </section>
          )
        })
        : 
          <></>
        }
      </div>
  )
}

export default ListNotes;