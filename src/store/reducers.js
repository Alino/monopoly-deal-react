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
    case 'MOVE_CARD':
      return moveCard(state, action);
    default:
      return state;
  }
}

function moveCard(state, action) {
  const newState = _.cloneDeep(state);
  const fromArray = action.from.split('.');
  const toArray = action.to.split('.');
  const cardToMove = newState[fromArray[0]][fromArray[1]].shift();
  newState[toArray[0]][toArray[1]].push(cardToMove);
  return newState;
}