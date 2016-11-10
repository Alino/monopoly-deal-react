import React from 'react';
import ReactDOM from 'react-dom';

class GameInfo extends React.Component {
  render() {
    return (
      <div>
        <span style={{fontWeight: 'bold'}}>Game Info</span> kvak
      </div>
    )
  }
}

ReactDOM.render(<GameInfo/>, document.getElementById('gameInfo'));