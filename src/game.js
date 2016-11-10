import { ActionCard, MoneyCard, EstateCard } from './Card.js';

export default class Game {
  static startNewGame() {
    console.log('starting new game');
    this.createCards();
    this.dealCards();
  }

  static dealCards() {
    console.log('dealing cards to players');
  }

  static createCards() {
    console.log('creating 110 cards');
    const cards = [];
    cards.push(new MoneyCard(1));
    cards.push(new MoneyCard(2));
    cards.push(new MoneyCard(3));
    cards.push(new MoneyCard(4));
    cards.push(new MoneyCard(5));
    cards.push(new MoneyCard(10));
    return cards;
  }
}