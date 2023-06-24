import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-showcase',
  templateUrl: './item-showcase.component.html',
  styleUrls: ['./item-showcase.component.scss']
})
export class ItemShowcaseComponent {

  itemId!: string;
  images: string[] = ["assets/camera ambience.png", "assets/camera ambience files.png"];

  title: string = "camera ambience";
  date: string = "5-24-23";
  price: string = "0.00";
  description: string = "some ambience/forest sounds recorded by me";

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.itemId = params["id"])
  }

}
