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
