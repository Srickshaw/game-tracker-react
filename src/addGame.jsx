import React from 'react';
import 'whatwg-fetch';

export default class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameName: '', gameSystem: '', finished: false};
    this.keepGameValueState = this.keepGameValueState.bind(this);
    this.keepGameSystemValueState = this.keepGameSystemValueState.bind(this);
    this.keepFinishedState = this.keepFinishedState.bind(this);
    this.addGame = this.addGame.bind(this);
    this.addGameSubmit = this.addGameSubmit.bind(this);
  }

	static contextTypes = {
	  router: React.PropTypes.object.isRequired
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
      console.log(json);
    })
  }

  addGameSubmit(e) {
    e.preventDefault();
    const gameName = this.state.gameName.trim();
    const gameSystem = this.state.gameSystem.trim();
    const finished = this.state.finished;
    this.addGame({ gameName: gameName, gameSystem: gameSystem, finished: finished });
    this.setState({ gameName: '', gameSystem: '' });
		this.context.router.push('/games');
  }

  render() {
    return(
      <section className="add-game-form">
        <h1>Add Game</h1>
        <form onSubmit={this.addGameSubmit}>
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
      </section>
    )
  }
}
