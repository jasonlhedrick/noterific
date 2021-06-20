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
  const [loggedIn, setLogin] = useState([false]);
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    setLogin(true);
  }
  useEffect(() => {
    // Update component when appNotes changes length or loggedIn switches.
  }, [appNotes.length, loggedIn])
  
  return (
    <Container>
      <Router>
        <nav className="main-nav" id="mainNav">
          <Link to="/">Home</Link>
          { localStorage.getItem('jwt')
          ? 
            <>
              <Link to="/notes">Note List</Link> 
              <Link to="/notes/add">Add a Note</Link>
            </>
          : 
            <>
              <Link to="/registration">Register</Link> 
              <Link to="/login">Login</Link>
            </>
          }
          { jwt ? 
            <Button onClick={() => { localStorage.removeItem('jwt'); setLogin(!loggedIn); }}>
              Logout
            </Button>
            :
            <></>
          }
        </nav>
        
        <main className="App">
          <Switch>
            <Route exact path="/">
                <Header/>
            </Route>
            <Route exact path="/notes/add">
              { jwt ?
                <AddNote setAppNotes={setAppNotes}/> 
                :
                <Redirect to="/" />
              }
            </Route>
            <Route exact path="/notes">
              { jwt ? 
                <ListNotes notes={appNotes}/> 
                :
                <Redirect to="/" />
              }
            </Route>
            <Route exact path="/registration">
              { !jwt ?
                <Registration />
              :
                <Redirect to="/listNotes" />
              }
            </Route>
            <Route exact path="/login">
              { !jwt ?
                <Login />
              :
                <Redirect to="/listNotes" />
              }
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
