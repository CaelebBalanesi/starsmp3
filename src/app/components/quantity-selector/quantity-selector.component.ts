import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent {

  amount: number = 0;

  add(){
    this.amount = this.amount + 1;
  }

  remove(){
    if(this.amount < 1) return;
    this.amount = this.amount - 1;
  }
}
