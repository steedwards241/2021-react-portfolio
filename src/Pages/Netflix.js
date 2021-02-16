import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../Components/Netflix/NFNavBar';
import NFHome from '../Components/Netflix/NFHome';
import NFSeries from '../Components/Netflix/NFSeries';
import NFFilms from '../Components/Netflix/NFFilms';
import NFPopular from '../Components/Netflix/NFPopular';
import NFMyList from '../Components/Netflix/NFMyList';

import '../Styles/Netflix.scss';

const App = () => {
  return (
    <div className="netflix-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/netflix" exact>
            <NFHome />
          </Route>
          <Route path="/netflix/series">
            <NFSeries />
          </Route>
          <Route path="/netflix/films">
            <NFFilms />
          </Route>
          <Route path="/netflix/popular">
            <NFPopular />
          </Route>
          <Route path="/netflix/mylist">
            <NFMyList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;