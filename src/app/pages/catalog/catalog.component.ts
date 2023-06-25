import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ServiceTsService } from 'src/app/services/service.ts.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  constructor(private service: ServiceTsService){
    service.getAllProducts()
      .then(resp => this.products = resp)
      .catch(err => console.error(err));
  }

  products!: Product[];

}
