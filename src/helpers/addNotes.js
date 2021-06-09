import axios from axios;
import { serverLoc } from '../constants';

function addNote(noteTitle, noteBody) {
    axios.post(`${serverLoc}/notes/`, { title: noteTitle, body: noteBody })
    .then(res => {
        console.log(res);
        return res;
    })
        .catch(err =>{
        console.log(err);
    })
}

export default addNote;