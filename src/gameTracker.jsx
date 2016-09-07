import React from 'react';
import { Link } from 'react-router';
import AddGame from './addGame.jsx';
import 'whatwg-fetch';
import './css/style.css';

export default class GameTracker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section>
        <nav className="menu">
          <h1>Game Tracker v.25</h1>
          <ul>
            <li><Link to="/addGame"><i className="fa fa-plus"></i>Add Game</Link></li>
            <li><Link to="/games"><i className="fa fa-list"></i>Games List</Link></li>
          </ul>
        </nav>
        <section className="content">
          {this.props.children}
        </section>
      </section>
    )
  }
}
