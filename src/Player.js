export class Player {
  constructor() {
    console.log('created new player');
    this.cardsOnHand = [];
    this.cardsInBank = [];
    this.cardsInEstates = [];
    this.isOnTurn = true;
    this.name = 'player1';
  }

  getTotalMoneyInBank() {
    return getTotalMoneyValueOfCards(this.cardsInBank);
  }

  addCardToHand(card) {
    card.owner = this.name;
    this.cardsOnHand.push(card);
  }

  addCardToBank(card) {
    card.owner = this.name;
    this.cardsInBank.push(card);
  }

  payToOtherPlayer(cards, otherPlayer) {
    const selectedCardsMoneyValue = getTotalMoneyValueOfCards(cards);
    const amountOfMoneyToPay = otherPlayer.requiresMoneyFrom[this.player.name];
    if (!amountOfMoneyToPay) {
      console.error(`${this.name} is not required to pay to ${otherPlayer.name}`)
    }
  }
}

function getTotalMoneyValueOfCards(cards) {
  let totalMoney = 0;
  cards.forEach(card => totalMoney += card.moneyValue);
  return totalMoney;
}