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
import AddNote from './pages/AddNote';
import ListNotes from './pages/ListNotes';
import Registration from './pages/Registration';
import Login from './pages/Login';
import ViewNote from './pages/ViewNote';
import './App.css';

import axios from 'axios';
import { serverLoc } from './constants';

function App() {
  const [appNotes, setAppNotes] = useState([]);
  const [loggedIn, setLogin] = useState([false]);
  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    async function getNotes() {
      try {
        const response = await axios.get(`${serverLoc}/notes/`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`
          }
        })
        setAppNotes(await response.data.notes);
      } catch(err) {
        console.error(err);
      }
    }
    if (jwt) getNotes();
  },[jwt]);
  
  function toggleLogin() {
    setLogin(!loggedIn);
  }

  return (
    <Container id="pageContainer">
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
                <ListNotes appNotes={appNotes} setAppNotes={setAppNotes} loggedIn={loggedIn}/> 
                :
                <Redirect to="/" />
              }
            </Route>
            <Route exact path="/notes/:id">
              { jwt ? 
                <ViewNote appNotes={appNotes} setAppNotes={setAppNotes} loggedIn={loggedIn}/> 
                :
                <Redirect to="/" />
              }
            </Route>
            <Route exact path="/registration">
              { !jwt ?
                <Registration loggedIn={loggedIn} toggleLogin={toggleLogin}/>
              :
                <Redirect to="/notes" />
              }
            </Route>
            <Route exact path="/login">
              { !jwt ?
                <Login loggedIn={loggedIn} toggleLogin={toggleLogin}/>
              :
                <Redirect to="/notes" />
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
