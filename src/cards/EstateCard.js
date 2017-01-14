import { Card } from './Card';

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