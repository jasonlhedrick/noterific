/*
    React functional component which lists all note titles and bodies passed to it in an object array format.
*/
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useParams 
} from "react-router-dom";

import { Card } from 'react-bootstrap';

function ListNotes(props) {
    const notes = props.notes;
    
    return (
        <div id="listNotes">
          {notes.map((note, index) => {
            return (
              <Link to={`/notes/${index}`} key={index}>
                <Card className="list-note-card" key={index}>
                  <Card.Title>{note.title}</Card.Title>
                  <Card.Text>{note.body}</Card.Text>
                </Card>
              </Link>
            )
          })}
        </div>
    )
}

export default ListNotes;