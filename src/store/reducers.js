import Game from '../game.js';
import { moveCardToBank } from './actions.js';
import * as _ from 'lodash';

export const initialState = () => {
  return new Game();
};

export function monopolyApp(state = initialState(), action) {
  switch (action.type) {
    case 'NEW_GAME':
      return initialState();
    case 'MOVE_CARD_FROM_HANDS_TO_BANK':
      return moveCardFromHandsToBank(state, action);
    case 'USE_ACTION_CARD':
      return state;
    case 'PERFORM_PLAYER_TURN':
      return state;
    case 'PUT_HOUSE_ON_COMPLETE_COLLECTION':
      return state;
    case 'SWAP_TWO_COLOR_WILDCARD':
      return state;
    default:
      return state;
  }
}

function moveCardFromHandsToBank(state, action) {
  const newState = _.cloneDeep(state);
  newState.players.forEach((player, index) => {
    if (action.playerName === player.name) {
      const cardToMove = newState.players[index].cardsOnHand.shift();
      newState.players[index].cardsInBank.push(cardToMove);
    }
  });
  return newState
}