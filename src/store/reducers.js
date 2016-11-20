import InitGame from '../InitGame.js';
import { moveCardToBank } from './actions.js';
import * as _ from 'lodash';

export const initialState = () => {
  return new InitGame();
};

export function monopolyApp(state = initialState(), action) {
  switch (action.type) {
    case 'NEW_GAME':
      return initialState();
    case 'MOVE_CARD_FROM_HANDS_TO_BANK':
      return moveCardFromHandsToBank(state, action);
    case 'USE_ACTION_CARD':
      return state;
    case 'END_PLAYER_TURN':
      return endPlayerTurn(state, action);
    case 'PUT_HOUSE_ON_COMPLETE_COLLECTION':
      return state;
    case 'SWAP_TWO_COLOR_WILDCARD':
      return state;
    default:
      return state;
  }
}

export function getNextPlayerName(players, currentPlayerName) {
  for (let p = 0; p < players.length; p++) {
    if (players[p].name === currentPlayerName) {
      if (p === players.length - 1) {
        return players[0].name;
      }
      return players[++p].name;
    }
  }
}

function endPlayerTurn(state, action) {
  const newState = _.cloneDeep(state);
  const currentPlayer = newState.currentTurn.playerName;
  const nextPlayer = getNextPlayerName(newState.players, currentPlayer);

  newState.currentTurn = {
    playerName: nextPlayer,
    actionsLeft: 3,
  };
  console.log(`${currentPlayer} has finished his turn, now ${nextPlayer} is on turn.`);
  return newState;
}

function moveCardFromHandsToBank(state, action) {
  const newState = _.cloneDeep(state);

  newState.players.forEach((player, index) => {
    if (action.playerName === player.name) {

      if (!player.isOnTurn) {
        console.error(new Error('player not on his turn', 'moveCardFromHandsToBank'));
        return state;
      }
      if (!action.card.moneyValue) {
        console.error(new Error('the card has no monetary value', 'moveCardFromHandsToBank'));
        return state;
      }

      player.cardsOnHand.forEach((card, index) => {
        if (card.id === action.card.id) {
          player.cardsOnHand.splice(index, 1);
          player.cardsInBank.push(card);
          console.log(`Player "${player.name}" has moved ${action.card.type} card with value ${action.card.moneyValue} to his bank`);
        }
      });
      newState.currentTurn.actionsLeft--;
    }
  });
  return newState
}