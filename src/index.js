import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Test from "./Test";
import Button from "react-bootstrap/Button";

function About() {
    return <h2>Whistful can help improve your whistling skills :) </h2>;
}

function Home() {
    return (
        <div>
            <h3>Welcome to Whistful</h3>
            <Button href="test" variant="outline-secondary" className="mx-2">
                Test
            </Button>
            <Button href="whistle" variant="outline-secondary" className="mx-2">
                Whistle
            </Button>
        </div>
    )
}

function MyNavBar() {
    return (
        <Navbar bg="light" variant="light">
            {/*<img*/}
            {/*    alt=""*/}
            {/*    src=""*/}
            {/*    width="30"*/}
            {/*    height="30"*/}
            {/*    className="d-inline-block align-top"*/}
            {/*/>*/}
            <Navbar.Brand href="home">Whistful</Navbar.Brand>
            <Nav>
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="test">Test</Nav.Link>
                <Nav.Link href="whistle">Whistle</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}

function MySwitch() {
    return (
        <Switch>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/test">
                <Test />
            </Route>
            <Route path="/whistle">
                <App />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </Switch>
    )
}

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <div className="App">
              <MyNavBar/>
              <header className="App-header">
                  <MySwitch/>
              </header>
          </div>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();