import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Button, Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
    <Container>
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

          <Button onClick={() => setLogin(!loggedIn)}>
            { loggedIn === true ? "Logout" : "Login"}
          </Button>
        </nav>
        
        <main className="App">
          <Switch>
            <Route exact path="/">
                <Header/>
            </Route>
            <Route exact path="/addNote">
              { loggedIn === true ? 
                <AddNote setAppNotes={setAppNotes}/> 
                : 
                <Redirect to="/home" /> }
            </Route>
            <Route exact path="/listNotes">
              { loggedIn === true ? 
              <ListNotes notes={appNotes}/> 
              : 
              <Redirect to="/home" /> }
            </Route>
          </Switch>
        </main>
      </Router>
    </Container>
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
