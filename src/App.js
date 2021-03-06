import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './Pages/NavBar';
import Instagram from './Pages/Instagram';
import Netflix from './Pages/Netflix';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <NavBar />
          </Route>
          <Route path="/instagram" exact>
            <Instagram />
          </Route>
          <Route path="/netflix">
            <Netflix />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
