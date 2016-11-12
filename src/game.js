import { ActionCard, MoneyCard, EstateCard } from './Card.js';
import { Player } from './Player.js';

export default class Game {
  constructor() {
    this.cards = [];
    this.startNewGame();
  }

    startNewGame() {
      console.log('starting new game');
      this.createCards();
      this.createPlayers();
      this.shuffleCards();
      this.dealCards();
    }

    createCards() {
    console.log('creating 110 cards');
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(2));
    this.cards.push(new MoneyCard(2));
    this.cards.push(new MoneyCard(3));
    this.cards.push(new MoneyCard(3));
    this.cards.push(new MoneyCard(4));
    this.cards.push(new MoneyCard(4));
    this.cards.push(new MoneyCard(4));
    this.cards.push(new MoneyCard(5));
    this.cards.push(new MoneyCard(5));
    this.cards.push(new MoneyCard(10));
  }
  
  createPlayers() {
    this.player1 = new Player();
    this.player2 = new Player();
  }

  shuffleCards() {
    for (let i = this.cards.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }
  
  dealCards() {
    console.log('dealing cards to players');
    // give 5 cards to each player from card pile
    for (let i = 0; i < 5; i++) {
      this.player1.addCardToHand(this.cards.pop());
      this.player2.addCardToHand(this.cards.pop());
    }
  }
  
}