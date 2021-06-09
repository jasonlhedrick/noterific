/*
    React functional component which lists all note titles and bodies passed to it in an object array format.
*/

function ListNotes(props) {
    const notes = props.notes;
    
    return (
        <div id="listNotes">
          {notes.map((note, index) => {
            return (
              <section key={index}>
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </section>
            )
          })}
        </div>
    )
}

export default ListNotes;