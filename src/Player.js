export class Player {
  constructor(name) {
    this.name = name;
    this.cardsOnHand = [];
    this.cardsInBank = [];
    this.cardsInEstates = [];
    this.isOnTurn = true;
    console.log(`created new player with name ${this.name}`);
  }

  getTotalMoneyInBank() {
    return getTotalMoneyValueOfCards(this.cardsInBank);
  }

  addCardToHand(card) {
    card.owner = this.name;
    this.cardsOnHand.push(card);
  }
}

function getTotalMoneyValueOfCards(cards) {
  let totalMoney = 0;
  cards.forEach(card => totalMoney += card.moneyValue);
  return totalMoney;
}