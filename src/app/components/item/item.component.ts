import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private service: ServiceTsService) {}

  ngOnInit() {
    this.service.getFileFromName(this.product.cover)
      .then(data => this.src = data[0].url)
  }

  src: string = "";
  @Input() product!: Product;
}
