import { Card } from './Card';

export class MoneyCard extends Card {
  constructor(moneyValue) {
    super(moneyValue);
    this.type = 'money';
    this.actions = ['moveToBank'];
    console.log(`created a money card with value of ${moneyValue}`);
  }
}

MoneyCard.cardTypes = [
  {
    moneyValue: 1,
    cardsInGame: 10
  },
  {
    moneyValue: 2,
    cardsInGame: 5
  },
  {
    moneyValue: 3,
    cardsInGame: 4
  },
  {
    moneyValue: 4,
    cardsInGame: 3
  },
  {
    moneyValue: 5,
    cardsInGame: 2
  },
  {
    moneyValue: 10,
    cardsInGame: 1
  }
];