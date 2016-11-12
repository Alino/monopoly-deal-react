import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../game.js';
import PlayerHands from './playerHands.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      game: [new Game()]
    }
  }

  onClick() {
    this.setState({
      game: [new Game()]
    });
    console.log(this.state.game[0].cards);
    // todo display game.cards in game info component
  }

  render() {
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container">
            <div id="newGame" className="navbar-btn">
              <button className="btn btn-default" onClick={this.onClick.bind(this)}>new game</button>
              <br/>
              <strong>cards on pile</strong> {JSON.stringify(this.state.game[0].cards.length)} <br/>
              <strong>cards in player1 hands</strong> {JSON.stringify(this.state.game[0].player1.cardsOnHand)} <br/>
              <strong>player1 money</strong> {this.state.game[0].player1.getTotalMoneyInBank()} <br/>
            </div>
          </div>
        </div>

        <div className="container">
          <PlayerHands player={this.state.game[0].player1} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));