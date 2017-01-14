import { Card } from './Card';

export class RentalCard extends Card {
  action(action) {
    action();
  }
}