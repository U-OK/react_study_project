import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Test from "./Test";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>I'm home</h1>;
}

export default App;
