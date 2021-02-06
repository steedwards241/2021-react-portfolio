import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authentication from './Pages/Authentication';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Authentication />
          </Route>
          <Route path="/home">
            <h1>Hello World!</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
