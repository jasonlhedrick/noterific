import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { serverLoc } from './constants';

/* Component imports */
import AddNote from './components/addnote/AddNote';

import './App.css';


function App() {
  const [appNotes, setAppNotes] = useState([]);

  useEffect(() => {
    /* Update the component when appNotes changes length */
  }, [appNotes.length])

  return (
    <main className="App">
      <AddNote appNotes={appNotes} setAppNotes={setAppNotes}/>
      <div id="listNotes">
        {appNotes.map((note, index) => {
          return (
            <section key={index}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </section>
          )
        })}
        
      </div>
    </main>
  );
}

export default App;
