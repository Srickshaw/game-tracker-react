import React from 'react';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cssClasses: '' };
    this.prettifyStatus = this.prettifyStatus.bind(this);
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

  removeGame(gameData){
      // $.ajax({
      //   url: '/games' + gameData.id,
      //   type: 'DELETE',
      //   data: gameData,
      //   success: function(data) {
      //     this.setState({data: data.data});
      //   }.bind(this)
      // })
      console.log(gameData.id);
  }

  render() {
    return(
        <div className="data-name">
          <p>Name: {this.props.name}</p>
          <p>System: {this.props.system}</p>
          <p>Finished: <span className={this.state.cssClasses}></span></p>
        </div>
    )
  }
}
