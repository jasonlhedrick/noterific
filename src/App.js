import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

/* Component imports */
import AddNote from './components/addnote/AddNote';
import ListNotes from './components/listnotes/ListNotes';

import './App.css';

function App() {
  const [appNotes, setAppNotes] = useState([]);
  const [loggedIn, setLogin] = useState([false])
  
  useEffect(() => {
    // Update component when appNotes changes length or loggedIn switches.
  }, [appNotes.length, loggedIn])
  
  return (
    <>
      <Router>
        <nav className="mainNav" id="mainNav">
          <Link to="/">Home</Link>

          { loggedIn === true 
          ? 
            <>
              <Link to="/listNotes">Note List</Link> 
              <Link to="/addNote">Add a Note</Link>
            </>
          : 
            <>
              Register - Login
            </>
          }

          <button onClick={() => setLogin(!loggedIn)}>
            { loggedIn === true ? "Logout" : "Login"}
          </button>
        </nav>
        <Header/>
        <main className="App">
          <Switch>
            <Route path="/addNote">
              { loggedIn === true ? <AddNote setAppNotes={setAppNotes}/> : <Redirect to="/home" /> }
            </Route>
            <Route path="/listNotes">
              { loggedIn === true ? <ListNotes notes={appNotes}/> : <Redirect to="/home" /> }
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}

function Header() {
  const siteName = 'Noterific!';

  return (
    <header>
      <h1>{siteName}</h1>
    </header>
  )
}
export default App;
