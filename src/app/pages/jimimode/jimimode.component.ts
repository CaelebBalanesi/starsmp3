import { Component } from '@angular/core';

@Component({
  selector: 'app-jimimode',
  templateUrl: './jimimode.component.html',
  styleUrls: ['./jimimode.component.scss']
})
export class JimimodeComponent {

  getItems(){
    console.log("Getting Items");
  }
}
