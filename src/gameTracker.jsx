import React from 'react';
import AddGame from './addGame.jsx';
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
      success: (gameData) => {
        this.setState({data: gameData.data});
      }
    });
  }

  addGame(gameData) {
    console.log(gameData);
    $.ajax({
      url: '/games',
      type: 'POST',
      data: gameData,
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({data: data.data});
      }
    })
  }

  componentDidMount() {
    this.getAll();
    setInterval(this.getAll, 5000);
  }

  render() {
    return(
      <section>
        <AddGame data={this.state.data} onAddSubmit={this.addGame} />
      </section>
    )
  }
}
