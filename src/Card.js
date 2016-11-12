import _ from "underscore";

export class Card {
  constructor(moneyValue) {
    Card.id++;
    this.id = Card.id+1;
    this.type = 'Card pseudo class type';
    this.moneyValue = moneyValue;
  }

  moveToBank(player) {
    if (!player) {
      console.error(new Error('player is not defined'), 'moveToBank');
      return;
    }
    if (!player.isOnTurn) {
      console.error(new Error('player not on his turn', 'moveToBank'));
      return;
    }
    if (this.owner !== player.name) {
      console.error(new Error('player does not own the card', 'moveToBank'));
      return;
    }
    if (!this.moneyValue) {
      console.error(new Error('the card has no monetary value', 'moveToBank'));
      return;
    }
    player.cardsOnHand.forEach((card, index) => {
      if (card.id == this.id) {
        player.cardsOnHand.splice(index, 1);
        player.cardsInBank.push(card);
        console.log(player);
      }
    });
    console.log(`Player "${player.name}" has moved ${this.type} card with value ${this.moneyValue} to his bank`);
  }
}
Card.id = 0;

export class ActionCard extends Card {
  action(action) {
    action();
  }
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