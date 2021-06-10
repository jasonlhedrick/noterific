import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Button, Container } from 'react-bootstrap';

/* Component imports */
import AddNote from './components/addnote/AddNote';
import ListNotes from './components/listnotes/ListNotes';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';

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
        <nav className="main-nav" id="mainNav">
          <Link to="/">Home</Link>
          { loggedIn === true 
          ? 
            <>
              <Link to="/listNotes">Note List</Link> 
              <Link to="/addNote">Add a Note</Link>
            </>
          : 
            <>
              <Link to="/registration">Register</Link> 
              <Link to="/login">Login</Link>
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
              { loggedIn ?
                <AddNote setAppNotes={setAppNotes}/> 
                :
                <Redirect to="/" />
              }
            </Route>
            <Route exact path="/listNotes">
              { loggedIn ? 
                <ListNotes notes={appNotes}/> 
                :
                <Redirect to="/" />
              }
            </Route>
            <Route exact path="/registration">
              <Registration />
            </Route>
            <Route exact path="/login">
              <Login />
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
