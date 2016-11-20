export default class AI {
  constructor(store) {
    this.store = store;
    this.store.subscribe(() => {
      this.state = this.store.getState();
      this.think();
    });
  }

  think() {
    console.log('AI is thinking about the current store...', this.store.getState());

    if (this.state.currentTurn.playerName === 'player2') {
      console.log(this.state);
      this.store.dispatch({
        type: 'MOVE_CARD_FROM_HANDS_TO_BANK',
        card: this.state.players[1].cardsOnHand[0],
        playerName: 'player2'
      });
    }
  }
}