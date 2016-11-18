import { monopolyApp, initialState } from '../src/store/reducers.js';
import * as _ from 'lodash';

import expect from 'expect';

describe('monopolyApp reducer', function() {
  describe('MOVE_CARD_FROM_HANDS_TO_BANK', function () {
    it('should move the card from players hands to his bank ', function() {
      // SETUP
      const state = initialState();
      const action = {
        type: 'MOVE_CARD_FROM_HANDS_TO_BANK',
        card: state.players[0].cardsOnHand[0],
        playerName: 'player1'
      };
      let expectedState = _.cloneDeep(state);
      const cardToMove = expectedState.players[0].cardsOnHand.shift();
      expectedState.players[0].cardsInBank.push(cardToMove);
      
      // EXECUTE
      const actualState = monopolyApp(state, action);
      
      // VERIFY
      expect(actualState).toEqual(expectedState);
      expect(actualState.players[0].cardsInBank.length).toBe(1);
      expect(actualState.players[0].cardsOnHand.length).toBe(4);
    })
  });
});