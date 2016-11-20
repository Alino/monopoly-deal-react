// here is the game mechanism

export default class Game {
  constructor(store) {
    this.store = store;
    this.store.subscribe(() => {
      const state = this.store.getState();
      if (state.currentTurn.actionsLeft === 0) {
        store.dispatch({
          type: 'END_PLAYER_TURN'
        })
      }
    });
  }
}