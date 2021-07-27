import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

function ViewNote(props) {
    const {id} = useParams();
    const note = props.notes[id];
    
    return (
        <Card>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
        </Card>
    )
}

export default ViewNote;