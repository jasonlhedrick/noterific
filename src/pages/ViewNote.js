import { Card, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import {useState} from 'react';
import axios from 'axios';
import { serverLoc } from '../constants';

function ViewNote(props) {
    const [editNote, setEditNote] = useState(false);
    const {id} = useParams();
    const thisNote = props.appNotes.filter(
        note => note.note_id.toString() === id
    );
    const [noteTitle, setNoteTitle] = useState(thisNote[0].title);
    const [noteBody, setNoteBody] = useState(thisNote[0].body);

    async function updateNote(e) {
        e.preventDefault();
        try {
            await axios.put(`${serverLoc}/notes/${id}`, {title: noteTitle, body: noteBody}, {
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
                props.setAppNotes(await updatedNotes.data.notes);
            }
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            {!editNote ?
                <div>
                    <Button onClick={() => setEditNote(!editNote)}>Edit Note</Button>
                    <Card>
                        <h3>{thisNote[0].title}</h3>
                        <p>{thisNote[0].body}</p>
                    </Card>
                </div>
                :
                <form>
                    <input type="text" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)}></input>
                    <textarea value={noteBody} onChange={(e) => setNoteBody(e.target.value)}></textarea>
                    <Button onClick={(e) => updateNote(e)}>Update Note</Button>
                </form>
            }
            
        </div>
    )
}

export default ViewNote;