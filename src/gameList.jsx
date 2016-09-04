import React from 'react';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cssClasses: '' };
    this.prettifyStatus = this.prettifyStatus.bind(this);
    this.removeGame = this.removeGame.bind(this);
  }

  prettifyStatus() {
    if(!this.props.status) {
      this.setState({ cssClasses: "finished finished-f" });
    }
    else {
      this.setState({ cssClasses: "finished finished-t" });
    }
  }

  componentDidMount() {
    this.prettifyStatus();
  }

  removeGame(){
      this.props.removeGame(this.props.gameID);
  }

  render() {
    return(
      <div className="data-name">
        <p>Name: {this.props.name}</p>
        <p>System: {this.props.system}</p>
        <p>Finished: <span className={this.state.cssClasses}></span></p>
        <button onClick={this.removeGame}>Remove Game</button>
      </div>
    )
  }
}
