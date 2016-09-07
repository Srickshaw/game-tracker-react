import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import GameTracker from './gameTracker.jsx';
import AddGame from './addGame.jsx';
import GameList from './gameList.jsx';

render((
  <Router history={hashHistory}>
    <Route path="/" component={GameTracker}>
      <Route path="/addGame" component={AddGame} />
      <Route path="/games" component={GameList} />
    </Route>
  </Router>),
  document.getElementById('root')
);
