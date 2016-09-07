import React from 'react';
import 'whatwg-fetch';
import IndividualGame from './individualGame.jsx'

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getAll = this.getAll.bind(this);
    this.onRemove = this.onRemove.bind(this);
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

  componentDidMount() {
    this.getAll();
  }

  onRemove(gameData) {
    fetch('/games/' + gameData, {
      method: 'DELETE',
      body: gameData
    })
    .then(() => {
      this.getAll();
    })
  }

  render() {
    let childNodes = this.state.data.map((child) => {
      return(
        <IndividualGame
          key={child.id}
          name={child.game_name}
          system={child.game_system}
          removeGame={this.onRemove}
          status={child.finished}
          gameID={child.id}
        />
      )
    })

    return(
      <section className="games-list">
        <h1>Game List</h1>
        {childNodes}
      </section>
    )
  }
}
