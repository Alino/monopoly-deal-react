import React from 'react';

// todo -> start using redux, so I don't have to use this.forceUpdate() everytime some props change?

export default class PlayerHands extends React.Component {
  render() {
    return (
      <div>
        <div className="playerHands">
          {this.props.player.cardsOnHand.map(card => (
            <div className="cardInHand" key={Math.random()}>
              cardType: {card.type} <br/>
              moneyValue: {card.moneyValue} <br/>
              {card.actions.map(action => (
                <div className="actions" key={Math.random()}>
                  actions: <a href="#"><span onClick={() => {card.moveToBank(this.props.player); this.forceUpdate();} }>{action}</span></a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}