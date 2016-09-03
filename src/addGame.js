import React from 'react';
import GameList from './gameList';

export default class AddGame extends React.Component {
	constructor(props) {
		super(props);
		this.state = { gameName: '', gameSystem: ''};
		this.keepGameValueState = this.keepGameValueState.bind(this);
		this.keepGameSystemValueState = this.keepGameSystemValueState.bind(this);
		this.addGame = this.addGame.bind(this);
	}

	keepGameValueState(e) {
		this.setState({ gameName: e.target.value });
	}

	keepGameSystemValueState(e) {
		this.setState({ gameSystem: e.target.value })
	}

	addGame(e) {
		e.preventDefault();
		const gameName = this.state.gameName.trim();
		const gameSystem = this.state.gameSystem.trim();
		console.log(gameName);
		console.log(gameSystem);
		this.props.onAddSubmit({gameName: gameName, gameSystem: gameSystem});
		this.setState({gameName: '', gameSystem: ''});
	}


	render() {
		const childNodes = this.props.data.map(function(child) {
			return(
				<GameList key={child.id} name={child.game_name} system={child.game_system} />
			)
		})

		return(
			<div>
				<form onSubmit={this.addGame}>
					<input
						type="text"
						placeholder="Game Name"
						value={this.state.gameName}
						onChange={this.keepGameValueState}
					/>
					<input
						type="text"
						placeholder="Game System"
						value={this.state.gameSystem}
						onChange={this.keepGameSystemValueState}
					/>
					<input
						type="submit"
						value="Add Game"
					/>
				</form>
				{childNodes}
			</div>
		)
	}
}
