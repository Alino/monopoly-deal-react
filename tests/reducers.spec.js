import { monopolyApp, initialState } from '../src/store/reducers.js';
import * as _ from 'lodash';

import expect from 'expect';

describe('monopolyApp reducer', function() {
  describe('MOVE_CARD', function () {
    it('should move the card from players hands to his bank ', function() {
      // SETUP
      const state = initialState();
      const action = {
        type: 'MOVE_CARD',
        card: state.player1.cardsOnHand[0],
        from: 'player1.cardsOnHand',
        to: 'player1.cardsInBank'
      };
      let expectedState = _.cloneDeep(state);
      const cardToMove = expectedState.player1.cardsOnHand.shift();
      expectedState.player1.cardsInBank.push(cardToMove);
      
      // EXECUTE
      const actualState = monopolyApp(state, action);
      
      // VERIFY
      expect(actualState).toEqual(expectedState);
      expect(actualState.player1.cardsInBank.length).toBe(1);
      expect(actualState.player1.cardsOnHand.length).toBe(4);
    })
  });
});