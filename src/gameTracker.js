import React from 'react';
import AddGame from './addGame';
import './css/style.css';

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: []};
    this.addGame = this.addGame.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    $.ajax({
      url: '/games',
      success: function(gameData) {
        this.setState({data: gameData.data});
        console.log(this.state.data);
      }.bind(this)
    });
  }

  addGame(gameData) {
    console.log(gameData);
    $.ajax({
      url: '/games',
      type: 'POST',
      data: gameData,
      dataType: 'json',
      success: function(data) {
        console.log(data);
        this.setState({data: data.data});
        console.log(this.state.data);
      }.bind(this)
    })
    console.log("Add game called");
  }

  componentDidMount() {
    this.getAll();
    setInterval(this.getAll, 5000);
  }

  render() {
    return(
      <div>
        <AddGame data={this.state.data} onAddSubmit={this.addGame} />
      </div>
    )
  }
}
