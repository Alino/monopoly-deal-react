import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../game.js';

class App extends React.Component {
  render() {
    return <button className="btn btn-default" onClick={onClick}>new game</button>
  }
}

function onClick() {
  Game.startNewGame();
}

ReactDOM.render(<App/>, document.getElementById('newGame'));