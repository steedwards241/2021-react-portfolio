import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './Pages/NavBar';
import Instagram from './Pages/Instagram';
import Authentication from './Pages/Authentication';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <NavBar item1="Login" item2="Instagram Mockup" item3="Contact" item4="Socials"/>
        <Switch>
          <Route path="/instagram" exact>
            <Instagram />
          </Route>
          <Route path="/login">
            <Authentication />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
