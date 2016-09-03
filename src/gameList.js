import React from 'react';

export default class GameList extends React.Component {
  constructor(props) {
    super(props);
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
      <div>
        <h1 className="data-name">Name: {this.props.name} System: {this.props.system}</h1>
      </div>
    )
  }
}
