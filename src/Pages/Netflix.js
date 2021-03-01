import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../Components/Netflix/NFNavBar';
import NFPage from '../Components/Netflix/NFPage';
import NFFooter from '../Components/Netflix/NFFooter';

import '../Styles/Netflix.scss';

const App = () => {
  return (
    <div className="netflix-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/netflix" exact>
            <NFPage pageTitle="" />
          </Route>
          <Route path="/netflix/series">
          <NFPage pageTitle="Series" />
          </Route>
          <Route path="/netflix/films">
          <NFPage pageTitle="Films" />
          </Route>
          <Route path="/netflix/popular">
          <NFPage pageTitle="Popular" />
          </Route>
          <Route path="/netflix/mylist">
          <NFPage pageTitle="My List" />
          </Route>
        </Switch>
        <NFFooter />
      </Router>
    </div>
  )
}

export default App;