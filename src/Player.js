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