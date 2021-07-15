import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from './extra.js';
import { Link } from 'react-router-dom';





function App() {
  return (
    <div>
      <Router>
        <Link to="/posting">
          <button id="buttons">Pet Scheduling</button>
        </Link>
        <Switch>
          <Route exact path="/posting" component={Hello} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

/* */