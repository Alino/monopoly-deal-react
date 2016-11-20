export default class AI {
  constructor(store) {
    this.store = store;
    this.store.subscribe(() => {
      this.think();
    });
  }

  think() {
    console.log('AI is thinking about the current store...', this.store.getState());

    // if player2 is on turn, AI is going to play for him
    // put all money into bank
  }
}