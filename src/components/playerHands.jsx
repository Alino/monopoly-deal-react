import React from 'react';
import { MoneyCard } from './MoneyCard.jsx';

export default class PlayerHands extends React.Component {
  render() {
    const store = this.props.store;

    return (
      <div>
        <div className="playerHands" style={{display: 'flex'}}>
          {this.props.player.cardsOnHand.map(card => (
            <div className="cardInHand" key={Math.random()}>
              cardType: {card.type} <br/>
              moneyValue: {card.moneyValue} <br/>
              {card.actions.map(action => (
                <div className="actions" key={Math.random()}>
                  actions:
                  <a href="#">
                  <span onClick={() => {
                    store.dispatch({
                      type: 'MOVE_CARD_FROM_HANDS_TO_BANK',
                      card: card,
                      playerName: this.props.player.name
                    });
                  } }>
                    {action}
                  </span>
                  </a>
                </div>
              ))}
              <MoneyCard value={card.moneyValue}></MoneyCard>
            </div>
          ))}
        </div>
      </div>
    )
  }
}