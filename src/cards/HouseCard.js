import { Card } from './Card';

export class HouseCard extends Card {
  putOnCompleteCollection() {
    console.log('putting house card on complete collection.');
  }
}