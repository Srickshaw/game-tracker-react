import React from 'react';
import AddGame from './addGame.jsx';
import 'whatwg-fetch';
import './css/style.css';

export default class GameTracker extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.addGame = this.addGame.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    fetch('/games')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({ data: json.data })
    })
  }

  addGame(gameData) {
    fetch('/games', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(gameData)
    })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({ data: json.data })
    })
  }

  componentDidMount() {
    this.getAll();
    setInterval(this.getAll, 3000);
  }

  render() {
    return(
      <section>
        <AddGame data={this.state.data} onAddSubmit={this.addGame} />
      </section>
    )
  }
}
