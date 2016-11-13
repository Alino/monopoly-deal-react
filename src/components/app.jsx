import { createStore } from 'redux';
import { monopolyApp } from '../store/reducers.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../game.js';
import PlayerHands from './playerHands.jsx';


const store = createStore(monopolyApp);

class App extends React.Component {
  constructor() {
    super();
  }
  

  onClick() {
    store.dispatch({
      type: 'NEW_GAME'
    });
    console.log(this.state.game[0].cards);
    // todo display game.cards in game info component
  }

  render() {
    this.state = store.getState();
    store.subscribe(this.forceUpdate.bind(this));
    console.log('rendered');
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container">
            <div id="newGame" className="navbar-btn">
              <button className="btn btn-default" onClick={this.onClick.bind(this)}>new game</button>
              <br/>
              <strong>cards on pile</strong> {JSON.stringify(this.state.game[0].cards.length)} <br/>
              <strong>cards in player1 hands</strong> {JSON.stringify(this.state.game[0].player1.cardsOnHand)} <br/>
              <hr/>
              <strong>cards in player1 bank</strong> {JSON.stringify(this.state.game[0].player1.cardsInBank)} <br/>
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
console.log(store.getState().player1);
