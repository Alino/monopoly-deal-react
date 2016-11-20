import { createStore } from 'redux';
import { monopolyApp } from '../store/reducers.js';
import React from 'react';
import ReactDOM from 'react-dom';
import PlayerHands from './playerHands.jsx';
import Game from '../Game.js';
import AI from '../AI.js';


const store = createStore(monopolyApp);
const game = new Game(store);
const bot = new AI(store);

const EndTurnButton = (state) => {
  if (state.state.currentTurn.playerName === 'player1') {
    return (
      <button className="btn btn-danger"
              style={{ marginLeft: '30px' }}
              onClick={() => {
                store.dispatch({
                  type: 'END_PLAYER_TURN'
                })
              }}
      >
        end turn
      </button>
    )
  } else return null;
};

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
        this.forceUpdate();
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = store.getState();
    return (
      <div>
        <div className="navbar navbar-default">
          <div className="container">
            <div id="newGame" className="navbar-btn">
              <button className="btn btn-default"
                      onClick={() => {
                        store.dispatch({
                          type: 'NEW_GAME'
                        });
                      }}>
                new game
              </button>

              <EndTurnButton state={state} />

              <br/>
              <strong>cards on pile</strong> {JSON.stringify(state.cards.length)} <br/>
              <hr/>
              <strong>cards in player1 bank</strong> {JSON.stringify(state.players[0].cardsInBank)} <br/>
              <strong>player1 money</strong> {state.players[0].getTotalMoneyInBank()} <br/>
            </div>
          </div>
        </div>

        <div className="container">
          <PlayerHands player={state.players[0]}
                       store={store}
          />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
console.log(store.getState().players[0]);
