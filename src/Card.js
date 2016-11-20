import _ from "underscore";

export class Card {
  constructor(moneyValue) {
    Card.id++;
    this.id = Card.id+1;
    this.type = 'Card pseudo class type';
    this.moneyValue = moneyValue;
  }
}
Card.id = 0;

export class ActionCard extends Card {
  action(action) {
    action();
  }
  // after using an action card there should be 5 seconds loading
  // if the other player which is being affected by the action card
  // has "I SAY NO" card, then he can use it during this loading
}

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

export class EstateCard extends Card {
  constructor(value, color) {
    super();
  };

  putOnTable() {
    console.log('putting card on table');
  }
}

EstateCard.allowedColors = [
  'green',
  'blue',
  'brown',
  'lightBlue',
  'lightGreen',
  'black',
  'yellow',
  'red',
  'orange',
  'pink'
];

EstateCard.cardTypes = [
  {
    color: 'green',
    numberForFullCollection: 3,
    streetNames: ['Mlynské nivy'],
    cardsInGame: 3,
    moneyValue: 4
  }
];

export class HouseCard extends Card {
  putOnCompleteCollection() {
    console.log('putting house card on complete collection.');
  }
}

export class RentalCard extends Card {
  action(action) {
    action();
  }
}