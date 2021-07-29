/*
    React functional component which lists all note titles and bodies passed to it in an object array format.
*/
import {
  Link,
} from "react-router-dom";

import { Button, Card, Container } from 'react-bootstrap';
import axios from "axios";
import { serverLoc } from "../constants";

function ListNotes(props) {
  async function removeNoteByID(id) {
      const response = await axios.delete(`${serverLoc}/notes/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      }})
      console.log(await response);
      const notes = await axios.get(`${serverLoc}/notes/`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      console.log(await notes);
      props.setAppNotes(await notes.data.notes);
  }
  
  return (
      <div id="listNotes">
        {props.appNotes ? 
        props.appNotes.map(note => {
          return (
            <Container key={note.note_id}>
              <Button onClick={() => removeNoteByID(note.note_id)}>X</Button>
              <Link to={`/notes/${note.note_id}`}>
                <Card className="list-note-card">
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.body}</Card.Text>
                </Card>
              </Link>
            </Container>
          )
        })
        : 
          <></>
        }
      </div>
  )
}

export default ListNotes;