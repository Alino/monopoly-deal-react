export class Card {
  constructor() {}

  moveToBank() {
    console.log('moving card to bank');
  }
}

export class ActionCard extends Card {
  action(action) {
    action();
  }
}

export class MoneyCard extends Card {
  constructor(moneyValue) {
    super();
    console.log(`created a money card with value of ${moneyValue}`);
  }
  
  static cardTypes = [
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
  ]
}

export class EstateCard extends Card {
  constructor(value, color);

  static allowedColors = [
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

  static cardTypes = [
    {
      color: 'green',
      numberForFullCollection: 3,
      streetNames: ['Mlynské nivy'],
      cardsInGame: 3,
      moneyValue: 4
    }
  ];


  putOnTable() {
    console.log('putting card on table');
  }
}

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