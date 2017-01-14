import { Card } from './Card';

export class ActionCard extends Card {
  constructor(moneyValue) {
    super(moneyValue);
    this.type = 'action';
    this.actions = ['moveToBank'];

  }
  // after using an action card there should be 5 seconds loading
  // if the other player which is being affected by the action card
  // has "I SAY NO" card, then he can use it during this loading
}