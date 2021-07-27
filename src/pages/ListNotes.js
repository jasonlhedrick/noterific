/*
    React functional component which lists all note titles and bodies passed to it in an object array format.
*/
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

import { Button, Card, Container } from 'react-bootstrap';

function ListNotes(props) {
    const notes = props.notes;
    
    function removeNoteByID(id) {
      props.setNotes(props.notes.map((note, index) => {
        if (index !== id) return note;
      }));
    }

    return (
        <div id="listNotes">
          {notes.map((note, index) => {
            return (
              <Container key={index}>
                <Button key={index} onClick={() => removeNoteByID(index)}>X</Button>
                <Link to={`/notes/${index}`} key={index}>
                  <Card className="list-note-card" key={index}>
                    <Card.Title>{note.title}</Card.Title>
                    <Card.Text>{note.body}</Card.Text>
                  </Card>
                </Link>
              </Container>
            )
          })}
        </div>
    )
}

export default ListNotes;