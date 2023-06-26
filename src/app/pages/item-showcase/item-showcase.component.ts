import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-item-showcase',
  templateUrl: './item-showcase.component.html',
  styleUrls: ['./item-showcase.component.scss']
})
export class ItemShowcaseComponent {

  itemId!: string;
  product!: Product;
  images: string[] = [];

  constructor(private route: ActivatedRoute, private service: ServiceTsService) {
    this.route.params.subscribe(params => {
      this.itemId = decodeURI(params["id"]);
      service.getProductFromName(this.itemId)
        .then(resp => this.product = resp[0])
        .then(() => {
          this.product.filler.forEach(obj => {
            console.log(obj);
            service.getFileFromName(obj)
              .then(resp => this.images.push(resp[0].url));
          })
        })
    })
  }
}
