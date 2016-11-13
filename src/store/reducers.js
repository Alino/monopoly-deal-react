import Game from '../game.js';
import { moveCardToBank } from './actions.js';

const initialState = () => {
  return {
    game: [new Game()]
  }
};

export function monopolyApp(state = initialState(), action) {
  if (action.type === 'NEW_GAME') {
    return initialState();
  } else {
    return state;
  }
}