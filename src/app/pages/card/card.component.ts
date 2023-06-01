import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  number = 0;

  increaseNumber() {
    this.number++;
  }

  decreaseNumber() {
    if (this.number > 0) {
      this.number--;
    }
  }
}
