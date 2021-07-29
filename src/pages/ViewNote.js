import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

function ViewNote(props) {
    const {id} = useParams();
    const thisNote = props.notes.filter(
        note => note.note_id.toString() === id
    );

    return (
        <Card>
            <h3>{thisNote[0].title}</h3>
            <p>{thisNote[0].body}</p>
        </Card>
    )
}

export default ViewNote;