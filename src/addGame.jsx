import React from 'react';
import GameList from './gameList.jsx';

export default class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameName: '', gameSystem: '', finished: false};
    this.keepGameValueState = this.keepGameValueState.bind(this);
    this.keepGameSystemValueState = this.keepGameSystemValueState.bind(this);
    this.keepFinishedState = this.keepFinishedState.bind(this);
    this.addGame = this.addGame.bind(this);
		this.onRemove = this.onRemove.bind(this);
  }

  keepGameValueState(e) {
    this.setState({ gameName: e.target.value });
  }

  keepGameSystemValueState(e) {
    this.setState({ gameSystem: e.target.value });
  }

  keepFinishedState(e) {
    this.setState({ finished: e.target.value });
  }

  addGame(e) {
    e.preventDefault();
    const gameName = this.state.gameName.trim();
    const gameSystem = this.state.gameSystem.trim();
    const finished = this.state.finished;
    this.props.onAddSubmit({ gameName: gameName, gameSystem: gameSystem, finished: finished });
    this.setState({ gameName: '', gameSystem: '' });
  }

	onRemove(gameData) {
    $.ajax({
      url: '/games/' + gameData,
      type: 'DELETE',
      data: gameData,
      success: (data) => {
        console.log(data);
      }
    })
  }

  render() {
    let childNodes = this.props.data.map((child) => {
      return(
        <GameList
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
      <section className="add-game-form">
        <h1>Add Game</h1>
        <form onSubmit={this.addGame}>
          <input
            type="text"
            placeholder="Game Name"
            value={this.state.gameName}
            onChange={this.keepGameValueState}
          />
          <br />
          <input
            type="text"
            placeholder="Game System"
            value={this.state.gameSystem}
            onChange={this.keepGameSystemValueState}
          />
          <br />
          <label>Finished: </label>
          <select defaultValue="Finished" onChange={this.keepFinishedState}>
            <option disabled value="Finished">Finished</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br />
          <input
            type="submit"
            value="Add Game"
          />
        </form>
        <section className="games-list">
					<h1>Game List</h1>
          {childNodes}
        </section>
      </section>
    )
  }
}
