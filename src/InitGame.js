import { DebtCollector, MoneyCard, EstateCard } from './Card.js';
import { Player } from './Player.js';

export default class InitGame {
  constructor() {
    console.log('starting new game');
    this.cards = [];
    this.cardsTrash = [];
    this.players = [];
    this.createCards();
    this.createPlayers();
    this.shuffleCards();
    this.dealCards();
    this.currentTurn = {
      playerName: 'player1',
      actionsLeft: 3,
      tookTwoCardsFromCardPile: false
    }
  }

    createCards() {
    console.log('creating 110 cards');
    // 2 Debt Collectors
    this.cards.push(new DebtCollector(5));
    this.cards.push(new DebtCollector(5));

    // six 1M cards
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));
    this.cards.push(new MoneyCard(1));

    // five 2M cards
    this.cards.push(new MoneyCard(2));
    this.cards.push(new MoneyCard(2));
    this.cards.push(new MoneyCard(2));
    this.cards.push(new MoneyCard(2));
    this.cards.push(new MoneyCard(2));

    // three 3M cards
    this.cards.push(new MoneyCard(3));
    this.cards.push(new MoneyCard(3));
    this.cards.push(new MoneyCard(3));

    // three 4M cards
    this.cards.push(new MoneyCard(4));
    this.cards.push(new MoneyCard(4));
    this.cards.push(new MoneyCard(4));

    // two 5M cards
    this.cards.push(new MoneyCard(5));
    this.cards.push(new MoneyCard(5));

    // one 10M card
    this.cards.push(new MoneyCard(10));
  }
  
  createPlayers() {
    this.players.push(new Player('player1'));
    this.players.push(new Player('player2'));
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
      this.players.forEach(player =>
        player.addCardToHand(this.cards.pop())
      )
    }
  }
  
}