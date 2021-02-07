import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authentication from './Pages/Authentication';
import NavBar from './Components/NavBar';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Authentication />
          </Route>
          <Route path="/home">
            <NavBar item1="Home" item2="About" item3="Contact" item4="Socials"/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
